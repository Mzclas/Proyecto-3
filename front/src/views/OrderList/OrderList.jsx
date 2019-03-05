import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { styles } from "./OrderList.styles";

let id = 0;
function createData(
  CustomerName,
  plantType,
  plantVariety,
  totalSeeds,
  trayType
) {
  id += 1;
  return { id, CustomerName, plantType, plantVariety, totalSeeds, trayType };
}

const rows = [
  createData("Luis Moreno", "Pimento", "Infante", "100.000", 294),
  createData("Antonio Hilario", "Melon", "Sancho", "37.000", 150),
  createData("El Pache", "Cebolla", "Baquero", "500.000", 1066),
  createData("Juan Pedro Gavilan", "Sandia", "Pata Negra", "16.000", 54),
  createData("S.A.T. Campos", "Coliflor", "Casper", "70.000", 726)
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Tomiplant Pedidos:</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Variedad</TableCell>
            <TableCell align="right">Total semillas</TableCell>
            <TableCell align="right">Bandeja</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.CustomerName}
              </TableCell>
              <TableCell align="right">{row.plantType}</TableCell>
              <TableCell align="right">{row.plantVariety}</TableCell>
              <TableCell align="right">{row.totalSeeds}</TableCell>
              <TableCell align="right">{row.trayType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
