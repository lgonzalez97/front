import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export interface SongProps {
  title: string;
  image: string;
  duration: string;
  price: number;
  file: string;
}

function Song(props: SongProps) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center">
        <img
          src={props.image}
          alt={props.image}
          style={{ maxWidth: "50%", maxHeight: 50 }}
        />
      </TableCell>
      <TableCell align="center">{props.title}</TableCell>
      <TableCell align="center">{props.duration}</TableCell>
      <TableCell align="center">{props.price}</TableCell>
      <TableCell align="center">
        <audio controls>
          <source src={props.file} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </TableCell>
    </TableRow>
  );
}

export { Song };
