import MovieInfo from "./component/MovieInfo";
import Movies from "./component/Movies";
import {Routes, Route} from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path= '/' element ={<Movies/>} />
        <Route path= 'movie-info-details' element ={<MovieInfo/>} />
      </Routes>
    </>
  );
}

export default App;
