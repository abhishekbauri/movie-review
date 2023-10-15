import TextField from "@mui/material/TextField";
import MovieIcon from "@mui/icons-material/Movie";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovie } from "../../app/movieSearchSlice/movieSearchSlice";

import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const [searchMovie, setSearchMovie] = useState("");

  const searchMovieHandler = (e) => {
    setSearchMovie(e.target.value);
  };

  const findMovieHandler = (e) => {
    e.preventDefault();
    dispatch(fetchMovie(searchMovie));
  };
  return (
    <form onSubmit={findMovieHandler}>
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
