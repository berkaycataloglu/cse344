import { createSlice } from '@reduxjs/toolkit';

export interface FoodState {
  selectedItem: object;
}

// initial state
const initialState: FoodState = {
  selectedItem: {}
};

// ==============================|| SLICE - FOOD ||============================== //

const food = createSlice({
  name: 'food',
  initialState,
  reducers: {
    selectItem(state, action) {
      state.selectedItem = action.payload;
    }
  }
});

export default food.reducer;

export const foodActions = food.actions;
