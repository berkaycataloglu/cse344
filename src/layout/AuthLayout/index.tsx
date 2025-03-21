import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

// ==============================|| AUTH LAYOUT ||============================== //

const AuthLayout: FC<Props> = ({ children }) => <>{children}</>;

export default AuthLayout;
