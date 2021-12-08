import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showButtoMenu: { show: false },
  dataUserLogin: { data: {} },
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
  },
});

export const { actionshowMenuSlide, actionDataUserLogin } =
  counterSlice.actions;

export default counterSlice.reducer;
