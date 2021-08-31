import { createSlice } from "@reduxjs/toolkit";

export const showTeamSlice = createSlice({
  name: "show",
  initialState: {
    show: false,
  },
  reducers: {
    setShow: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { setShow } = showTeamSlice.actions;
export default showTeamSlice.reducer;
