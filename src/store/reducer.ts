// third-party
import { combineReducers } from 'redux';

// project imports
import food from './slices/food';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  food
});

export default reducer;
