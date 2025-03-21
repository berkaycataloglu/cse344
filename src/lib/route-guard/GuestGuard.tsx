'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// project imports
// import useAuth from 'hooks/useAuth';
import { HOME_PATH } from '@/lib/config';

// types
import { GuardProps } from '@/types';

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({ children }: GuardProps) => {
  //   const { isLoggedIn } = useAuth();
  const isLoggedIn = false;
  const router = useRouter();

  const location = localStorage.getItem('location');

  useEffect(() => {
    if (isLoggedIn && location) {
      router.push(HOME_PATH);
    }
  }, [isLoggedIn, location, router]);

  if (isLoggedIn && location) return;

  return children;
};

export default GuestGuard;
