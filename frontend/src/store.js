import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';

const initialState = () => {
  let cartItems = localStorage.getItem('cartItems');
  cartItems = cartItems ? JSON.parse(cartItems) : [];

  let userInfo = localStorage.getItem('userInfo');
  userInfo = userInfo ? JSON.parse(userInfo) : null;

  return {
    cart: {
      cartItems,
    },
    userLogin: {
      userInfo,
    },
  };
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const middlewares = [thunk];
const store = createStore(
  reducer,
  initialState(),
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
