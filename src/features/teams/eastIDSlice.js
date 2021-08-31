import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const setEastID = createAsyncThunk("eastID/setEastID", async () => {
  const eastID = await (
    await fetch("https://api-nba-v1.p.rapidapi.com/teams/confName/East", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "694b13d17amshbd230d43fbffbd3p16d5a9jsnb8e3754bcb28", //from main gmail
      },
    })
  ).json();
  return eastID.api.teams;
});
export const eastIDSlice = createSlice({
  name: "eastID",
  initialState: {
    eastID: [],
  },

  extraReducers: (builder) => {
    builder.addCase(setEastID.fulfilled, (state, action) => {
      state.eastID = action.payload;
    });
  },
});

export const {} = eastIDSlice.actions;
export default eastIDSlice.reducer;
