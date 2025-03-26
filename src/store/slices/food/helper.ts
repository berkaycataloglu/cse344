import { useSelector } from 'react-redux';
import { RootState, store } from '@/store';
import { foodActions, FoodState } from '.';

export const useVehicleState = () => useSelector<RootState, FoodState>((state) => state.food);

export const dpSelectVehicle = (data: object) => store.dispatch(foodActions.selectItem(data));
