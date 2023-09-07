/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./MovieCard.css";

const MovieCardCard = (props) => {
  const navigate = useNavigate();
  const movieList = props[0];

  const handleClick = (item) => {
    navigate('movie-info-details', {state: {movieId: item.imdbID}});
  }

  return (
    <div className="container">
      {movieList &&
        movieList.map((item) => (
          <Card sx={{ width: 300, margin: 2, height: 550 }} key={item.imdbID} onClick={() => handleClick(item)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="450"
                image={item.Poster}
                alt={item.Title}
              />
              <CardContent sx={{ height: 100 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.Title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </div>
  );
};

export default MovieCardCard;
