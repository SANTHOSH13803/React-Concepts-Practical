import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

const store = configureStore({
  reducer: {
    // [userSlice.name]: userSlice.reducer
    // or
    user: userSlice.reducer
  }
});

export default store;
