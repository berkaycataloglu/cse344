/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { usePathname, useRouter } from 'next/navigation';

// project imports
// import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';

// types
import { GuardProps } from '@/types';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }: GuardProps) => {
  //   const { isLoggedIn } = useAuth();
  const isLoggedIn = true;
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn && !location) router.push('/login');
  }, [isLoggedIn, location, router]);

  if (!isLoggedIn) return;

  return children;
};

export default AuthGuard;
