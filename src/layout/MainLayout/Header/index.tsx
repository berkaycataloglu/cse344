import React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';

function Header() {
  return (
    <div className="flex justify-between p-4 border-b-gray-600 border-1 items-center">
      <h1 className="pl-2">Logo</h1>
      <ul className="flex gap-12">
        <li>
          <Button variant="ghost">Ana Sayfa</Button>
        </li>
        <li>
          <Button variant="ghost">Favoriler</Button>
        </li>
        <li>
          <Button variant="ghost">Programım</Button>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Hesabım</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Hesap Bilgileri</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profil</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Gizlilik</DropdownMenuItem>
              <DropdownMenuItem>Abonelik</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
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
