import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovieInfo = createAsyncThunk("fetchMovieInfo", async (id) => {
  const url = `https://www.omdbapi.com/?i=${id}&apikey=c9c94dfb`;
  const response = await fetch(url);
  return response.json();
});

const initialState = {
  movieInfo: {},
  isLoading: false,
  isError: true,
  errorMessage: null,
};

const moveInfoSlice = createSlice({
  name: "movie Info",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovieInfo.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchMovieInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.movieInfo = action.payload;
    });
    builder.addCase(fetchMovieInfo.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});

export default moveInfoSlice;
