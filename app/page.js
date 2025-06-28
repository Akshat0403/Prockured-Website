'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

// Auth screens
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import CreateProfile from './components/CreateProfile/CreateProfile';

// Dashboard (includes sidebar + main content switch)
import DashboardLayout from './components/Home/Dashboard/DashboardLayout';

const HomePage = () => {
  const searchParams = useSearchParams();
  const currentView = searchParams.get('view') || 'login';

  const authViews = ['login', 'signup', 'forgot-password', 'create-profile'];

  if (authViews.includes(currentView)) {
    switch (currentView) {
      case 'login': return <LogIn />;
      case 'signup': return <SignUp />;
      case 'forgot-password': return <ForgotPassword />;
      case 'create-profile': return <CreateProfile />;
      default: return <LogIn />;
    }
  }

  // If not an auth view, render the dashboard layout
  return <DashboardLayout />;
};

export default HomePage;
