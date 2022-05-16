import * as React from "react";
import { Menu } from "./components/Menu";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Albums } from "./components/Albums";
import { useDispatch } from "react-redux";
import { addAlbums } from "./store/actions/albums.actions";
import { Songs } from "./components/Songs";

function App() {
  const dispatch = useDispatch();

  const getAlbums = () => {
    fetch("http://3.218.67.164:9025/music/albums/")
      .then((data) => data.json())
      .then((values) => dispatch(addAlbums(values)));
  };

  React.useEffect(() => {
    getAlbums();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Menu></Menu>
      </Grid>
      <Grid item xs={7} style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: 600, margin: "2em" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="https://lh3.googleusercontent.com/PbXmq8wbQDuMg1Jlv0VLRhNBD7WlgT7OzAbwi_VR8VxeyD6qhydaKvLR3EM79VqgCwmIIc0kO4vt9Sg=w2880-h1200-p-l90-rj"
                alt="Blink 182"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Gorillaz
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gorillaz are an English virtual band formed in 1998 by
                  musician Damon Albarn and artist Jamie Hewlett, from London,
                  England.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <Songs></Songs>
      </Grid>
      <Grid item xs={3}>
        <Albums></Albums>
      </Grid>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          backgroundColor: "#03a9f4",
          width: "100%",
          height: 100,
          marginLeft: "16px",
        }}
      ></div>
    </Grid>
  );
}

export default App;
