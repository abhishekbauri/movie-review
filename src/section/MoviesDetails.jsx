import ErrorPage from "../component/errorPage/ErrorPage.jsx";
import Loader from "../component/loader/Loader.jsx";
import { useSelector } from "react-redux";
import MovieInfo from "../component/movieInfo/MovieInfo";

const MoviesDetails = () => {
  const loader = useSelector((state) => state.movieDetails.isLoading);
  const error = useSelector((state) => state.movieDetails.isError);
  return <>{loader ? <Loader /> : error ? <ErrorPage /> : <MovieInfo />}</>;
};

export default MoviesDetails;
