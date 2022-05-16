import { useSelector } from "react-redux";
import { albumsSelector } from "../store/selectors/globalSelector";
import { Album, AlbumProps } from "./Album";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Albums() {
  const albums = useSelector(albumsSelector);
  return (
    <div>
      <h3>Albums</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {albums.map((album: AlbumProps) => {
              return <Album {...album} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export { Albums };
