import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const setAllPlayers = createAsyncThunk(
  "allPlayers/setAllPlayers",
  async () => {
    const allPlayers = await (
      await fetch("https://www.balldontlie.io/api/v1/players", {
        method: "GET",
      })
    ).json();
    return allPlayers;
  }
);

export const allPlayersSlice = createSlice({
  name: "allPlayers",
  initialState: {
    allPlayers: [],
  },
  extraReducers: (builder) => {
    builder.addCase(setAllPlayers.fulfilled, (state, action) => {
      state.allPlayers = action.payload;
    });
  },
});

export const {} = allPlayersSlice.actions;
export default allPlayersSlice.reducer;
