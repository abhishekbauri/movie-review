import Movies from "./section/Movies";
import {Routes, Route} from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import MoviesDetails from "./section/MoviesDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path= '/' element ={<Movies/>} />
        <Route path= 'movie-info-details' element ={<MoviesDetails/>} />
      </Routes>
    </>
  );
}

export default App;
