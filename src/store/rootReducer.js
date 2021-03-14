import {combineReducers} from 'redux';
import authReducer from './slices/authSlice';
import cartSlice from './slices/cartSlice';
import orderSlice from './slices/orderSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartSlice,
  order: orderSlice,
});

export default rootReducer;
