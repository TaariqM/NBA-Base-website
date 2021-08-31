import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const setEastTeams = createAsyncThunk(
  "eastTeams/setEastTeams",
  async () => {
    const eastTeams = await (
      await fetch(
        `https://api-nba-v1.p.rapidapi.com/standings/standard/2020/conference/east`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "694b13d17amshbd230d43fbffbd3p16d5a9jsnb8e3754bcb28", //from main gmail
          },
        }
      )
    ).json();
    return eastTeams.api.standings.sort(function (x, y) {
      return x.conference.rank - y.conference.rank;
    });
  }
);
export const eastTeamsSlice = createSlice({
  name: "eastTeams",
  initialState: {
    eastTeams: [],
  },

  extraReducers: (builder) => {
    builder.addCase(setEastTeams.fulfilled, (state, action) => {
      state.eastTeams = action.payload;
    });
  },
});

export const {} = eastTeamsSlice.actions;
export default eastTeamsSlice.reducer;
