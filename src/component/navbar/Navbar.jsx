import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Stack, Typography } from "@mui/material";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <Stack direction="row" alignItems="center" gap={1}>
        <LocalMoviesIcon sx={{ fontSize: 40 }} />
        <Typography variant="p"> Movie Review</Typography>
        <LocalMoviesIcon sx={{ fontSize: 40 }} />
      </Stack>
    </div>
  );
};

export default Navbar;
