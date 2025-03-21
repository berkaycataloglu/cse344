import React from 'react';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div>
      <Header />

      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
