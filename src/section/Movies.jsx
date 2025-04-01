import { Suspense, lazy } from "react";
import Search from "../component/search/Search";
import { useSelector } from "react-redux";

const Loader = lazy(() => import("../component/loader/Loader"));
const ErrorPage = lazy(() => import("../component/errorPage/ErrorPage"));
const MovieCardCard = lazy(() => import("../component/movieCard/MovieCard"));

const Movies = () => {
  const loader = useSelector((state) => state.movieSearched.isLoading);
  const error = useSelector((state) => state.movieSearched.isError);

  return (
    <div className="inner-container">
      <Search />
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        {loader ? <Loader /> : error ? <ErrorPage /> : <MovieCardCard />}
      </Suspense>
    </div>
  );
};

export default Movies;
