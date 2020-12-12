import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer } from './reducers/userReducers';

const initialState = () => {
  let cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : [];

  let userInfo = localStorage.getItem('userInfo');
  userInfo = userInfo ? JSON.parse(userInfo) : null;

  return {
    cart: {
      cartItems,
    },
    user: {
      userInfo,
    },
  };
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userLoginReducer,
});

const middlewares = [thunk];
const store = createStore(
  reducer,
  initialState(),
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
