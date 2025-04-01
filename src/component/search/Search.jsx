import TextField from "@mui/material/TextField";
import MovieIcon from "@mui/icons-material/Movie";
import InputAdornment from "@mui/material/InputAdornment";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../../app/movieSearchSlice/movieSearchSlice";

import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const [searchMovie, setSearchMovie] = useState("");

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debouncedFetchMovie = useCallback(
    debounce((query) => {
      dispatch(fetchMovie(query));
    }, 300),
    [dispatch]
  );

  const searchMovieHandler = (e) => {
    const value = e.target.value;
    setSearchMovie(value);

    if (value.trim().length >= 3) {
      debouncedFetchMovie(value);
    }
  };

  return (
    <form>
      <TextField
        id="outlined-basic"
        label="Search any movie..."
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MovieIcon />
            </InputAdornment>
          ),
        }}
        className="input-field"
        value={searchMovie}
        onChange={searchMovieHandler}
        autoComplete="off"
      />
    </form>
  );
};

export default Search;
