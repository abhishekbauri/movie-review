import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Button from '@mui/material/Button';


import "./MovieInfo.css";

const MovieInfo = () => {
  const [infoData, setInfoData] = useState(null);
  const [loader, setLoader] = useState(true);

  const location = useLocation();

  const { movieId } = location.state;

  const movieSearchWithId = async (id) => {
    
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=c9c94dfb`
      );

      let data = await res.json();
      setInfoData(data);
      setLoader(false)
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    movieSearchWithId(movieId);
  }, [movieId]);

  if(loader){
    return <Loader />
  }else{

  return (
    <section className="main-container">
      <div className="image-container">
        <img src={infoData?.Poster} alt={infoData?.Title} />
      </div>

      <div className="movie-info-container">
        <h3>{infoData?.Title}</h3>
        <p>{infoData?.Plot}</p>
        <h4>
          Genre: <span>{infoData?.Genre}</span>
        </h4>
        <h4>
          Director : <span>{infoData?.Director}</span>
        </h4>
        <h4>
          Relase Year : <span>{infoData?.Year}</span>
        </h4>
        <h4>
          Actors : <span>{infoData?.Actors}</span>
        </h4>
        <div className="rating-container">
          <Button
            variant="outlined"
            sx={{ marginTop: 3, color: "white" }}
            endIcon={<StarIcon sx={{ fontSize: 20, color: "yellow" }} />}
          >
            IMDB: {infoData?.Ratings[0]?.Value}
          </Button>

          {infoData.Ratings[1] && (
            <Button variant="contained" sx={{ marginTop: 3 }}>
              RT: {infoData?.Ratings[1]?.Value}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
  }
};

export default MovieInfo;
