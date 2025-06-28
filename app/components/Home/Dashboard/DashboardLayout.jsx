'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  MessageSquare, 
  ShoppingCart, 
  Megaphone, 
  BookOpen,
  Settings,
  HelpCircle, 
  ChevronLeft,
} from 'lucide-react';
import Image from 'next/image';

import styles from './Dashboard.module.css';

import AddProduct from '../AddProduct/AddProduct';
import Catalogue from '../Catalogue/Catalogue';
import ChatWrapper from '../Chat/ChatWrapper';
import Help from '../Help/Help';
import Marketing from '../Marketing/Marketing';
import Order from '../Order/Order';
import Setting from '../Setting/Setting';
import NewCampaign from '../NewCampaign/NewCampaign';
import EditProfile from '../EditProfile/EditProfile';
import CustomerOverview from '../CustomerOverview/CustomerOverview';
import CustomerDetail from '../CustomerDetail/CustomerDetail';
import ExistingPreset from '../ExistingPreset/ExistingPreset';
import PresetEdit from '../PresetEdit/PresetEdit';
import Success from '../CampaignApproval/Success';

const DashboardLayout = () => {
  const searchParams = useSearchParams();
  const currentView = searchParams.get('view') || 'chat';

  const navItems = [
    { name: 'Chat', icon: MessageSquare, view: 'chat' },
    { name: 'Order', icon: ShoppingCart, view: 'order' },
    { name: 'Marketing', icon: Megaphone, view: 'marketing' },
    { name: 'Catalogue', icon: BookOpen, view: 'catalogue' },
    { name: 'Setting', icon: Settings, view: 'setting' },
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'chat': return <ChatWrapper />;
      case 'order': return <Order />;
      case 'marketing': return <Marketing />;
      case 'catalogue': return <Catalogue />;
      case 'setting': return <Setting />;
      case 'help': return <Help />;
      case 'add-product': return <AddProduct />;
      case 'new-campaign': return <NewCampaign />;
      case 'edit-profile': return <EditProfile />;
      case 'customer': return <CustomerOverview />;
      case 'customer-detail': return <CustomerDetail />;
      case 'existing-preset': return <ExistingPreset />;
      case 'preset-edit': return <PresetEdit />
      case 'success': return <Success />;
      default: return <ChatWrapper />;
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <a href='/?view=chat'>
            <Image 
              src="/images/ProckuredImage.jpg" 
              alt="Prockured Logo"  
              width={100}
              height={100}
            />
          </a>
        </div>
      </div>

      <div className={styles.mainContentWrapper}>
        <aside className={styles.sidebar}>
          <nav className={styles.navbarNav}>
            {navItems.map((item) => (
              <Link key={item.name} href={`/?view=${item.view}`} className={`${styles.navItem} ${searchParams.get('view') === item.view ? styles.navItemActive : ''}`}>
                <item.icon className={styles.navIcon} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <Link href="/?view=help" className={`${styles.navItem} ${searchParams.get('view') === 'help' ? styles.navItemActive : ''}`}>
            <HelpCircle className={styles.navIcon} />
            <span>Help</span>
          </Link>
        </aside>

        <div className={styles.contentArea}>
          <main className={styles.mainContent}>
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
