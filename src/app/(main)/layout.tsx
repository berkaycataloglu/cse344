import React from 'react';
import MainLayout from '@/layout/MainLayout';
import AuthGuard from '@/lib/route-guard/AuthGuard';

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthGuard>
      <MainLayout>{children}</MainLayout>
    </AuthGuard>
  );
}

export default Layout;
