import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const setWestTeams = createAsyncThunk(
  "westTeams/setWestTeams",
  async () => {
    const westTeams = await (
      await fetch(
        `https://api-nba-v1.p.rapidapi.com/standings/standard/2020/conference/west`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "694b13d17amshbd230d43fbffbd3p16d5a9jsnb8e3754bcb28",
          },
        }
      )
    ).json();
    return westTeams.api.standings.sort(function (x, y) {
      return x.conference.rank - y.conference.rank;
    });
  }
);
export const westTeamsSlice = createSlice({
  name: "westTeams",
  initialState: {
    westTeams: [],
  },

  extraReducers: (builders) => {
    builders.addCase(setWestTeams.fulfilled, (state, action) => {
      state.westTeams = action.payload;
    });
  },
});

export const {} = westTeamsSlice.actions;
export default westTeamsSlice.reducer;
