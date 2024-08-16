import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

type CartState = {
  cart: ICart[];
};

type CartAction = {
  type: string;
  cartItem: ICart;
};

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICart>) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<number>) {
      // payload = id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      const item: any = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item: any = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: any) => state.cart.cart;

export const getTotalCartQuantity = (state: any) =>
  state.cart.cart.reduce((sum: any, item: any) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: any) =>
  state.cart.cart.reduce((sum: any, item: any) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id: number) => (state: any) =>
  state.cart.cart.find((item: any) => item.id === id)?.quantity ?? 0;
