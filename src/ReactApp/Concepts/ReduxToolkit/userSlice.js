import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileDetails: null
};
//* createSlice - Automatically creates Reducers, Actions and Action Types

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    saveProfile: (state, action) => {
      state.profileDetails = action.payload;
    }
  }
});

export const { saveProfile } = userSlice.actions;

export default userSlice.reducer;
