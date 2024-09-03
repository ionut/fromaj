import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

interface CartState {
  cart: ICart[];
}

interface Cart {
  cart: CartState;
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: CartState, action: PayloadAction<ICart>) {
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
    decreaseItemQuantity(state: CartState, action: PayloadAction<number>) {
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

export const getCart = (state: Cart) => state.cart.cart;

export const getTotalCartQuantity = (state: Cart) =>
  state.cart.cart.reduce((sum: number, item: ICart) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: Cart) =>
  state.cart.cart.reduce(
    (sum: number, item: ICart) => sum + item.totalPrice,
    0
  );

export const getCurrentQuantityById = (id: number) => (state: Cart) =>
  state.cart.cart.find((item: ICart) => item.id === id)?.quantity ?? 0;
