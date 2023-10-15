import MovieCardCard from "../component/movieCard/MovieCard";
import Search from "../component/search/Search";
import Loader from "../component/loader/Loader";
import ErrorPage from "../component/errorPage/ErrorPage";
import { useSelector } from "react-redux";

const Movies = () => {
  const loader = useSelector((state) => state.movieSearched.isLoading);
  const error = useSelector((state) => state.movieSearched.isError);

  return (
    <div className="inner-container">
      <Search />
      {loader ? <Loader /> : error ? <ErrorPage /> : <MovieCardCard />}
    </div>
  );
};

export default Movies;
