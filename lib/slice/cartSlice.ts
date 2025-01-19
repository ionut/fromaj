import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  slug: string;
  totalPrice: number;
}

interface CartState {
  cart: ICart[];
}

interface RootState {
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
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<number>) {
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
    increaseItemQuantityBySelect(
      state: CartState,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        item.totalPrice = item.price * action.payload.quantity;
      }
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
  increaseItemQuantityBySelect,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.cart;

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum: number, item: ICart) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce(
    (sum: number, item: ICart) => sum + item.totalPrice,
    0
  );

export const getCurrentQuantityById = (id: number) => (state: RootState) =>
  state.cart.cart.find((item: ICart) => item.id === id)?.quantity ?? 0;
