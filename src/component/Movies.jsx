/* eslint-disable no-unreachable */
import { useEffect, useState } from "react";
import MovieCardCard from "./MovieCard";
import Search from "./Search";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(true);
  const [onStart, setOnStart] = useState(false);

  const searchMovieWithName = async (name) => {
    setLoader(true);
    setOnStart(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${name}&apikey=c9c94dfb`
      );
      console.log("res-->", res);

      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();
      setLoader(false);
      setMovieData([data.Search]);
      setError(data.Response);
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  useEffect(() => {
    if (onStart && movieData[0] === undefined) {
      setError(false);
    }
  }, [movieData, onStart]);

  console.log("errPage", error);

  return (
    <div className="inner-container">
      <Search onSearchMovie={searchMovieWithName} />
      {loader ? (
        <Loader />
      ) : error ? (
        <MovieCardCard {...movieData} />
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Movies;
