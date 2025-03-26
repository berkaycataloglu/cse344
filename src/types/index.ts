import { ReactElement } from 'react';

export type GuardProps = {
  children: ReactElement | null;
};

export interface InitialLoginContextProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: object | null | undefined;
}

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};
