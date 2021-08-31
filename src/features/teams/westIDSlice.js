import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const setWestID = createAsyncThunk("westID/setWestID", async () => {
  const westID = await (
    await fetch("https://api-nba-v1.p.rapidapi.com/teams/confName/West", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": "694b13d17amshbd230d43fbffbd3p16d5a9jsnb8e3754bcb28",
      },
    })
  ).json();
  return westID.api.teams;
});
export const westIDSlice = createSlice({
  name: "westID",
  initialState: {
    westID: [],
  },

  extraReducers: (builders) => {
    builders.addCase(setWestID.fulfilled, (state, action) => {
      state.westID = action.payload;
    });
  },
});

export const {} = westIDSlice.actions;
export default westIDSlice.reducer;
