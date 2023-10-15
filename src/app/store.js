import { configureStore } from "@reduxjs/toolkit";
import moveInfoSlice from "./movieInfoSlice/movieInfoSlice";
import movieSearchSlice from "./movieSearchSlice/movieSearchSlice";

const store = configureStore({
  reducer: {
    movieDetails: moveInfoSlice.reducer,
    movieSearched: movieSearchSlice.reducer,
  },
});

export default store;
