import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialLoginContextProps } from '@/types';

// initial state
const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

// ==============================|| SLICE - LOADING ||============================== //

const loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setRegister: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    set: (state) => {
      state.enableLoading = false;
    },
    setDisableSnackbar: (state) => {
      state.enableSnackbar = false;
    },
    setDisableAll: (state) => {
      state.enableLoading = false;
      state.enableSnackbar = false;
    },
    setMessages: (state, action: PayloadAction<MessagesState>) => {
      Object.assign(state, action.payload);
    },
    setInitialState: () => initialState
  }
});

export default loading.reducer;

export const loadingActions = loading.actions;
