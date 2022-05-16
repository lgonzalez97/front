import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Song, SongProps } from "./Song";
import { useEffect, useState } from "react";

function Songs() {
  const [songs, setSongs] = useState([]);
  const getSongs = () => {
    fetch("http://3.218.67.164:9025/music/songs/")
      .then((data) => data.json())
      .then((values) => setSongs(values));
  };

  useEffect(() => {
    getSongs();
  }, []);

  console.log("hola", songs);
  return (
    <div>
      <h3>Song list</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Duration</TableCell>
              <TableCell align="center">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {songs.map((song: SongProps) => {
              return <Song {...song} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export { Songs };
