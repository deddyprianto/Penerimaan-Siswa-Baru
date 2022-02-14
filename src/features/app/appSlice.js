import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showButtoMenu: { show: false },
  dataUserLogin: { data: {} },
  data: { data: "" },
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    actionshowMenuSlide: (state, action) => {
      state.showButtoMenu = action.payload;
    },
    actionDataUserLogin: (state, action) => {
      state.dataUserLogin = action.payload;
    },
    actionData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { actionshowMenuSlide, actionDataUserLogin, actionData } =
  counterSlice.actions;

export default counterSlice.reducer;
