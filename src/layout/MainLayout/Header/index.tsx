'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth';

function Header() {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="pl-2">Logo</h1>
      <ul className="flex gap-12">
        <li>
          <Button variant="ghost" onClick={() => router.push('/home')}>
            Ana Sayfa
          </Button>
        </li>
        <li>
          <Button variant="ghost" onClick={() => router.push('/favourities')}>
            Favoriler
          </Button>
        </li>
        <li>
          <Button variant="ghost" onClick={() => router.push('/schedule')}>
            Programım
          </Button>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Hesabım</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Hesap Bilgileri</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/profile')}>Profil</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Gizlilik</DropdownMenuItem>
              <DropdownMenuItem>Abonelik</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>
                Çıkış yap
                <DropdownMenuShortcut>
                  <LogOut strokeWidth={1.5} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}

export default Header;
