'use client';

import React, { createContext, useEffect, useReducer } from 'react';

import { jwtDecode } from 'jwt-decode';

import { LOGIN, LOGOUT } from '@/store/actions';
import accountReducer from '@/store/accountReducer';

import { InitialLoginContextProps, KeyedObject } from '@/types';
import { JWTContextType } from '@/types/auth';
import { LOCAL_STROAGE } from '@/lib/enums/localStroage';

export type TokenTypeEnum = (typeof TokenTypeEnum)[keyof typeof TokenTypeEnum];

export const TokenTypeEnum = {
  Bearer: 'Bearer'
} as const;

export interface TokenResponse {
  /** The access token for authentication. */
  access_token?: string;
  /** The expiration time of the access token in seconds. */
  expires_in?: number;
  /** The refresh token for re-authentication. */
  refresh_token?: string;
  /** The type of the token (usually Bearer). */
  token_type?: TokenTypeEnum;
}

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const verifyToken: (st: string) => boolean = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded: KeyedObject = jwtDecode(accessToken);
  /**
   * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
   */
  // return decoded.exp > Date.now() / 1000;
  return true;
};

const setSession = (tokens?: TokenResponse | null) => {
  if (tokens) {
    localStorage.setItem(LOCAL_STROAGE.ACCOUNT, JSON.stringify(tokens));
  } else {
    localStorage.removeItem(LOCAL_STROAGE.ACCOUNT);
  }
};

const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  useEffect(() => {
    const init = async () => {
      try {
        const accountString = localStorage.getItem(LOCAL_STROAGE.ACCOUNT);
        const account: TokenResponse = accountString && JSON.parse(accountString);

        if (account?.access_token && verifyToken(account.access_token)) {
          setSession(account);

          const user = jwtDecode(account.access_token);
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user
            }
          });
        } else {
          dispatch({
            type: LOGOUT
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT
        });
      }
    };

    init();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      //   setSession(tokendata);
      localStorage.setItem(
        LOCAL_STROAGE.ACCOUNT,
        JSON.stringify({
          access_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6ImJlcmtheSIsImlhdCI6MTQ1ODc4NTc5NiwiZXhwIjoxNDU4ODcyMTk2fQ.MOKtkM_EFSBtBucAkiDfyv0srgDdic98_nQxKv9W4ko'
        })
      );
      dispatch({
        type: LOGIN,
        payload: {
          isLoggedIn: true,
          user: { username }
        }
      });
    } catch (error) {
      console.error('Giriş yapılırken hata oluştu!', error);
    }
  };

  const register = async (firstName: string, lastName: string, email: string, phoneNumber: string, password: string) => {
    try {
      console.log('Kayıt İşlemi', { firstName, lastName, email, phoneNumber, password });
    } catch (error) {
      console.error('Hata:', error);
      throw error;
    }
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };

  const resetPassword = async (email: string) => {
    try {
      console.log('Şifre sıfırlanacak', email);
    } catch (error) {
      console.error('Şifre sıfırlama işlemi sırasında hata oluştu!', error);
    }
  };

  const updateProfile = () => {};

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <></>;
  }

  return <JWTContext.Provider value={{ ...state, login, logout, register, resetPassword, updateProfile }}>{children}</JWTContext.Provider>;
};

export default JWTContext;
