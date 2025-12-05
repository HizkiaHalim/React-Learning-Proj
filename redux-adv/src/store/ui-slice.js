import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartRender: false, notif: null },
  reducers: {
    toggle(state) {
      state.cartRender = !state.cartRender;
    },
    showNotif(state, action) {
      state.notif = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
