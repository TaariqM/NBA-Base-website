import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// export const setTeams = createAsyncThunk("teams/setTeams", async () => {
//   const teams = await (
//     await fetch(`https://www.balldontlie.io/api/v1/teams`)
//   ).json();
//   return teams;
// });
export const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    teams: null,
  },
  reducers: {
    setTeams: (state, action) => {
      state.teams = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(setTeams.fulfilled, (state, action) => {
  //     state.teams = action.payload;
  //   });
  // },
});

export const { setTeams } = teamsSlice.actions;
export default teamsSlice.reducer;
