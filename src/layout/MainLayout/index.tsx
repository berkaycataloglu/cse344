import React from 'react';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />

      <main className="w-vw min-h-dvh m-3 p-3 bg-zinc-100 dark:bg-zinc-950 rounded-md">{children}</main>
    </div>
  );
}

export default MainLayout;
