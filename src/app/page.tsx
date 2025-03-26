'use client';

import Login from './(auth)/login/page';
import GuestGuard from '@/lib/route-guard/GuestGuard';

export default function Home() {
  return (
    <GuestGuard>
      <Login />
    </GuestGuard>
  );
}
