'use client';

import { ReactNode } from 'react';

// third-party
import { Provider } from 'react-redux';

// project-import
import { store } from '@/store';
import { ThemeProvider } from '@/components/theme-provider';
import { JWTProvider as AuthProvider } from '@/contexts/JWTContext';

export default function ProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}
