import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (i) => i.product === item.product,
      );

      if (existingItemIndex !== -1) {
        const cartItems = [...state.cartItems];
        cartItems[existingItemIndex] = item;
        return { ...state, cartItems };
      }

      return { ...state, cartItems: [...state.cartItems, item] };
    }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload,
        ),
      };

    default:
      return state;
  }
};

// eslint-disable-next-line import/prefer-default-export
export { cartReducer };
