import { createSlice } from "@reduxjs/toolkit";
export const playersSlice = createSlice({
  //these 3 arguments will always be the same for any slice application
  name: "players",
  initialState: {
    //this initialState is the actual state that we will be accessing
    players: null,
  },
  reducers: {
    //this object will contain all of the actions/functions that will be done to the players state
    setPlayers: (state, action) => {
      //all of these functions will take 2 arguements: "state" and "action"
      state.players = action.payload;
    },
  },
});

export const { setPlayers } = playersSlice.actions;
export default playersSlice.reducer;
