import React from 'react';
import AuthLayout from '@/layout/AuthLayout';
import GuestGuard from '@/lib/route-guard/GuestGuard';

function Layout() {
  return (
    <GuestGuard>
      <AuthLayout>Layout</AuthLayout>
    </GuestGuard>
  );
}

export default Layout;
