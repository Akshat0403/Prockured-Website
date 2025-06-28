// api/supplierApi.js
import axios from 'axios';

const BASE_URL = 'https://api-v7quhc5aza-uc.a.run.app';

const endpoints = {
  signUp: 'supplierSignUp',
  addProduct: 'supplierAddProductManually',
  getCatalogue: 'getCatalogue',
  createCampaign: 'createCampaign',
  getCampaign: 'getCampaign',
  getDetails: 'getSupplierDetails',
  pending: 'getPendingOrders',
  confirmed: 'getSupplierConfirmedOrders',
  past: 'getCompletedOrders',
  customers: 'getCustomersList',
  accept: 'acceptOrder',
  dispatch: 'orderDelivered',
  clientProfile: '/clientProfile',
};

export const supplierApi = {
  async signUp(params, navigation) {
    try {
      const phone = await AsyncStorage.getItem('phoneNumber');
      const url = `${BASE_URL}/${endpoints.signUp}/${params.name}/${params.businessName}/${params.email}/${params.pincode}/${params.state}/${params.country}/${params.gstNumber}/${phone}/${params.billingAddress}/${params.shippingAddress}`;

      const response = await axios.get(url);
      if (response.status === 200 || response.status === 201) {
        Alert.alert('Success', 'Profile saved successfully!');
        await AsyncStorage.setItem('supplierPhoneNumber', phone);
        await AsyncStorage.setItem('supplierGST', params.gstNumber);
        navigation.navigate('Vendor App', { screen: 'Chat' });
      } else {
        Alert.alert('Error', response.data.message || 'Failed to save profile');
      }
    } catch (error) {
      Alert.alert('Error', `Failed to save profile: ${error.message}`);
    }
  },

  async addProductManually(data, setFormData, setSelectedCategory, setSelectedProductUnit, navigation) {
    try {
      const response = await axios.post(`${BASE_URL}/${endpoints.addProduct}`, data);
      if (response.status === 200) {
        Alert.alert('Success', 'Product added successfully!');
        setFormData({ productName: '', unitQuantity: '', productUnit: '', productPrice: '', productCategory: '' });
        setSelectedCategory({ categoryImage: '', categoryName: '' });
        setSelectedProductUnit({ name: '', value: '' });
        navigation.navigate('Vendor App', { screen: 'Chat' });
      } else {
        Alert.alert('Error', response.data?.message || 'Unknown error.');
      }
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Please try again.');
    }
  },

  async getCatalogue(supplierGst) {
    const response = await axios.get(`${BASE_URL}/${endpoints.getCatalogue}/${supplierGst}`);
    return Object.values(response.data);
  },

  async createCampaign(payload, navigation, isLive) {
    try {
      const response = await axios.post(`${BASE_URL}/${endpoints.createCampaign}`, {
        ...payload,
        live: isLive ? 'true' : 'false',
      });
      Alert.alert('Success', `Campaign ${isLive ? 'sent' : 'saved'} successfully!`);
      navigation.navigate('Vendor App', { screen: 'Chat' });
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || error.message);
    }
  },

  async getCampaigns(gstNumber) {
    const response = await axios.post(`${BASE_URL}/${endpoints.getCampaign}`, { gstNumber });
    const campaigns = Object.values(response.data.data || {});
    return {
      live: campaigns.filter((c) => c.live === true || c.live === 'true'),
      drafts: campaigns.filter((c) => c.live === false || c.live === 'false'),
    };
  },

  async getDetails(supplierGst) {
    const response = await axios.get(`${BASE_URL}/${endpoints.getDetails}/${supplierGst}`);
    return response.data;
  },

  async getOrdersGrouped(supplierGST, fetchClientProfile) {
    const genericFetch = async (path, payload) => {
      const { data } = await axios.post(`${BASE_URL}/${path}`, payload);
      return Array.isArray(data) ? data : Object.values(data.data || {});
    };

    const normaliseOrders = (arr = []) =>
      arr.map((o, idx) => {
        const timestamp = new Date(o.timestamp || o.createdAt || o.orderDate || Date.now());
        return { ...o, orderId: o.orderId || `temp-${idx}`, timestamp };
      });

    const enrichOrders = async (orders) => {
      return Promise.all(
        orders.map(async (order) => {
          const profile = await fetchClientProfile(order.clientGST, order.clientPhone);
          return {
            ...order,
            clientName: profile?.name || profile?.Name || order.clientGST,
            businessName: profile?.businessName || profile?.name || order.clientGST,
            clientAvatar: profile?.avatarUrl,
          };
        })
      );
    };

    const [pending, confirmed, past] = await Promise.all([
      enrichOrders(normaliseOrders(await genericFetch(endpoints.pending, { supplierGST }))),
      enrichOrders(normaliseOrders(await genericFetch(endpoints.confirmed, { supplierGst: supplierGST }))),
      enrichOrders(normaliseOrders(await genericFetch(endpoints.past, { supplierGST }))),
    ]);

    return { pending, confirmed, past };
  },

  async fetchClientProfile(clientGST, clientPhone, clientCache, setClientCache) {
    const cacheKey = clientGST || clientPhone;
    if (!cacheKey) return {};
    if (clientCache[cacheKey]) return clientCache[cacheKey];

    try {
      const res = await axios.get(`${BASE_URL}${endpoints.clientProfile}/${clientGST || clientPhone}`);
      setClientCache((prev) => ({ ...prev, [cacheKey]: res.data }));
      return res.data;
    } catch (error) {
      console.warn(`Client profile fetch failed: ${error.message}`);
      return {};
    }
  },

  async getCustomerList(gstNumber) {
    const response = await axios.post(`${BASE_URL}/${endpoints.customers}`, { supplierGST: gstNumber });
    const clients = response.data.clients || {};

    return Object.entries(clients).map(([clientGstKey, client]) => {
      const lastOrderId = Object.keys(client.Open_Orders || {})[0];
      const supplierOrder = client.Open_Orders?.[lastOrderId]?.[client.Open_Orders?.[lastOrderId]?.supplierGST] || {};

      return {
        id: clientGstKey,
        gst: client.gst,
        name: client.Name,
        businessName: client.BusinessName,
        phone: client.phone,
        email: client.email,
        country: client.country,
        state: client.state,
        pincode: client.pincode,
        shippingAddress: client.shippingAddress,
        billingAddress: client.billingAddress,
        lastOrderId,
        lastOrderTotal: supplierOrder.totalAmount ? `₹ ${Number(supplierOrder.totalAmount).toFixed(2)}` : 'N/A',
        lastOrderDate: supplierOrder.OrderDate || 'N/A',
        lastOrderItems: Array.isArray(supplierOrder.items) ? supplierOrder.items : [],
        lastOrderDeliveryDate: supplierOrder.DeliveryDate || 'N/A',
      };
    });
  },
};
