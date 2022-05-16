import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export interface AlbumProps {
  name: string;
  image: string;
  stock: number;
}

function Album(props: AlbumProps) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center">
        <img
          src={props.image}
          alt={props.name}
          style={{ maxWidth: "50%", maxHeight: 50 }}
        />
      </TableCell>
      <TableCell align="center">{props.name}</TableCell>
      <TableCell align="center">{props.stock}</TableCell>
    </TableRow>
  );
}

export { Album };
