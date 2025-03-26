export interface JWTData {
  userId: string;
}

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: object | null | undefined;
  logout: () => void;
  login: (email: string, password: string, otp?: string) => Promise<void>;
  register: (firstName: string, lastName: string, email: string, phoneNumber: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: VoidFunction;
};
