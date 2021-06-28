import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "../features/players/playersSlice";
import teamsReducer from "../features/teams/teamsSlice";
export default configureStore({
  reducer: { players: playersReducer, teams: teamsReducer },
});
