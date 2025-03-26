import React from 'react';
import AuthLayout from '@/layout/AuthLayout';
import GuestGuard from '@/lib/route-guard/GuestGuard';

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <GuestGuard>
      <AuthLayout>{children}</AuthLayout>
    </GuestGuard>
  );
}

export default Layout;
