import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "../features/players/playersSlice";
import teamsReducer from "../features/teams/teamsSlice";
import newsReducer from "../features/news/newsSlice";
import eastTeamsReducer from "../features/teams/eastTeamsSlice";
import eastIDReducer from "../features/teams/eastIDSlice";
import westTeamsReducer from "../features/teams/westTeamsSlice";
import westIDReducer from "../features/teams/westIDSlice";
import showTeamReducer from "../features/teams/showTeamSlice";
import allPlayersReducer from "../features/players/allPlayersSlice";
import seasonStatsReducer from "../features/players/playerSeasonStatsSlice";
export default configureStore({
  reducer: {
    players: playersReducer,
    teams: teamsReducer,
    news: newsReducer,
    eastTeams: eastTeamsReducer,
    eastID: eastIDReducer,
    westTeams: westTeamsReducer,
    westID: westIDReducer,
    show: showTeamReducer,
    allPlayers: allPlayersReducer,
    playerSeasonStats: seasonStatsReducer,
  },
});
