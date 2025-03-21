import React from 'react';
import MainLayout from '@/layout/MainLayout';
import AuthGuard from '@/lib/route-guard/AuthGuard';

function Layout() {
  return (
    <AuthGuard>
      <MainLayout>Layout</MainLayout>
    </AuthGuard>
  );
}

export default Layout;
