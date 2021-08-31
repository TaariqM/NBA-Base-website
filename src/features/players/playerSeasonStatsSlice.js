import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const setPlayerSeasonStats = createAsyncThunk(
  "playerSeasonStats/setPlayerSeasonStats",
  async () => {
    const playerSeasonStats = await (
      await fetch("https://www.balldontlie.io/api/v1/season_averages", {
        method: "GET",
      })
    ).json();
    return playerSeasonStats;
  }
);

export const playerSeasonStatsSlice = createSlice({
  name: "playerSeasonStats",
  initialState: {
    playerSeasonStats: [],
  },
  extraReducers: (builder) => {
    builder.addCase(setPlayerSeasonStats.fulfilled, (state, action) => {
      state.playerSeasonStats = action.payload;
    });
  },
});

export const {} = playerSeasonStatsSlice.actions;
export default playerSeasonStatsSlice.reducer;
