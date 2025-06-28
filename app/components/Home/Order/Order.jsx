'use client';

import React, { useState } from 'react';
import styles from './Order.module.css';
import Image from 'next/image';

const initialOrders = [
  {
    id: 1,
    name: 'Jade’s Cafe',
    time: '12:30 PM',
    message: 'We want to place an order...',
    status: 'pending',
    avatar: '/images/avatar.png',
  },
  {
    id: 2,
    name: 'Crunch',
    time: '10:45 AM',
    message: 'Order ready for delivery',
    status: 'confirmed',
    avatar: '/images/avatar.png',
  },
  {
    id: 3,
    name: 'Spice World',
    time: '09:20 AM',
    message: 'Delivered successfully!',
    status: 'delivered',
    avatar: '/images/avatar.png',
  },
  {
    id: 4,
    name: 'Jade’s Cafe',
    time: '12:30 PM',
    message: 'We want to place an order...',
    status: 'pending',
    avatar: '/images/avatar.png',
  },
  {
    id: 5,
    name: 'Crunch',
    time: '10:45 AM',
    message: 'Order ready for delivery',
    status: 'confirmed',
    avatar: '/images/avatar.png',
  },
  {
    id: 6,
    name: 'Spice World',
    time: '09:20 AM',
    message: 'Delivered successfully!',
    status: 'delivered',
    avatar: '/images/avatar.png',
  },
  {
    id: 7,
    name: 'Jade’s Cafe',
    time: '12:30 PM',
    message: 'We want to place an order...',
    status: 'pending',
    avatar: '/images/avatar.png',
  },
  {
    id: 8,
    name: 'Crunch',
    time: '10:45 AM',
    message: 'Order ready for delivery',
    status: 'confirmed',
    avatar: '/images/avatar.png',
  },
  {
    id: 9,
    name: 'Spice World',
    time: '09:20 AM',
    message: 'Delivered successfully!',
    status: 'delivered',
    avatar: '/images/avatar.png',
  },
];

export default function Order() {
  const [orders, setOrders] = useState(initialOrders);
  const [currentTab, setCurrentTab] = useState('pending');
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalType, setModalType] = useState('confirm'); // or 'dispatch' or 'product'
  const [toastMessage, setToastMessage] = useState('');

  const filteredOrders = orders.filter((order) => order.status === currentTab);

  const openModal = (order, type = 'confirm') => {
    setSelectedOrder(order);
    setModalType(type);
    setShowModal(true);
  };

  const handleAction = () => {
    const updated = orders.map((order) =>
      order.id === selectedOrder.id
        ? {
            ...order,
            status:
              modalType === 'dispatch'
                ? 'delivered'
                : modalType === 'product'
                ? 'approved'
                : 'confirmed',
          }
        : order
    );
    setOrders(updated);
    setShowModal(false);

    const message =
      modalType === 'dispatch'
        ? `Order dispatched for ${selectedOrder.name}`
        : modalType === 'product'
        ? `${selectedOrder.name} product approved`
        : `${selectedOrder.name} has been confirmed`;

    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 2500);
  };

  return (
    <div className={styles.container}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${currentTab === 'pending' ? styles.activeTab : ''}`}
          onClick={() => setCurrentTab('pending')}
        >
          Pending Order
        </button>
        <button
          className={`${styles.tab} ${currentTab === 'confirmed' ? styles.activeTab : ''}`}
          onClick={() => setCurrentTab('confirmed')}
        >
          Confirmed Order
        </button>
        <button
          className={`${styles.tab} ${currentTab === 'delivered' ? styles.activeTab : ''}`}
          onClick={() => setCurrentTab('delivered')}
        >
          Past Order
        </button>
      </div>

      {/* Orders */}
      <div className={styles.orderList}>
        {filteredOrders.length === 0 ? (
          <p className={styles.noData}>No orders in this category.</p>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.orderInfo}>
                <Image
                  src={order.avatar}
                  alt="avatar"
                  width={48}
                  height={48}
                  className={styles.avatar}
                />
                <div>
                  <h4 className={styles.orderName}>{order.name}</h4>
                  <p style={{ fontSize: '12px', color: '#777' }}>{order.message}</p>
                </div>
              </div>

              <div className={styles.actions}>
                {currentTab === 'pending' && (
                  <>
                    <button className={styles.confirmBtn} onClick={() => openModal(order, 'confirm')}>
                      Accept
                    </button>
                    <button className={styles.rejectBtn} onClick={() => openModal(order, 'reject')}>
                      Reject
                    </button>
                  </>
                )}

                {currentTab === 'confirmed' && (
                  <div className={styles.buttonSummary}>
                    <button className={styles.confirmBtn} onClick={() => openModal(order, 'dispatch')}>
                      Dispatch
                    </button>
                    <button className={styles.confirmBtn}>View Summary</button>
                  </div>
                )}

                {currentTab === 'delivered' && (
                  <div className={styles.buttonSummary}>
                    <button className={styles.confirmBtn}>Download Invoice</button>
                    <button className={styles.confirmBtn}>View Summary</button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <p>
              {modalType === 'confirm' && (
                <>
                  Do you want to <span style={{ color: '#76B117', fontWeight: 600 }}>confirm</span> the
                  order from <strong>{selectedOrder.name}</strong>?
                </>
              )}
              {modalType === 'dispatch' && (
                <>
                  Dispatch the order to <strong>{selectedOrder.name}</strong>?
                </>
              )}
              {modalType === 'product' && (
                <>
                  Approve the product from <strong>{selectedOrder.name}</strong>?
                </>
              )}
              {modalType === 'reject' && (
                <>
                  Reject the order from <strong>{selectedOrder.name}</strong>?
                </>
              )}
            </p>
            <div className={styles.modalButtons}>
              <button className={styles.modalYes} onClick={handleAction}>
                {modalType === 'reject' ? 'Reject' : 'Accept'}
              </button>
              <button className={styles.modalNo} onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top-right Toast */}
      {toastMessage && <div className={styles.successPopup}>✅ {toastMessage}</div>}
    </div>
  );
}
