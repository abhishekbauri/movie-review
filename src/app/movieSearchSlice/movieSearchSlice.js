import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovie = createAsyncThunk("fetchMovie", async (name) => {
  const url = `https://www.omdbapi.com/?s=${name}&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
  const response = await fetch(url);
  return response.json();
});

const initialState = {
  movieList: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const movieSearchSlice = createSlice({
  name: "searchMove",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload.Response === "True") {
        state.movieList = action.payload.Search;
        state.isError = false;
      } else {
        state.isError = true;
      }
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export default movieSearchSlice;
