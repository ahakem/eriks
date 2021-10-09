import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Avatar,
} from "@mui/material";

import ProductsSelection from "./ProductsSelection";
import ColumnHead from "./ColumnHead";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  badge:{
    margin:1,
  },
  
});
const ProductsTable = ({ state, toggleProducts, columns }) => {
  const classes = useStyles();

  const rows = [];
  const badges = [];
  const specialKeys = ["badges", "productImage", "name"];
  Object.keys(columns[0]).forEach((feature) => {
    if (specialKeys.indexOf(feature) === -1) {
      let obj = [feature];
      state.showingProducts.forEach((bol, index) => {
        if (bol && typeof(columns[index][feature]) !== "object") {
          
          obj.push(columns[index][feature]);
        }
      });
      rows.push(obj);
    } else if (feature === "badges") {
      state.showingProducts.forEach((bol, index) => {
        if (bol) {
          badges.push(columns[index][feature].split("|"));
        }
      });
    }
  });

  const colHead = () => {
    const heads = [];

    columns.forEach((col, index) => {
      if (state.showingProducts[index]) {
        heads.push({
          comp: (
            <ColumnHead
              img={col.productImage}
              price={col.salePrice}
              name={col.name}
            />
          ),
          key: col.name,
        });
      }
    });
    return heads;
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "250px", borderBottom: 0 }}>
                <ProductsSelection
                  toggleProducts={toggleProducts}
                  productNames={state.productNames}
                />
              </TableCell>
              {colHead().map((head) => (
                <TableCell style={{ borderBottom: 0 }} key={head.key}>
                  {head.comp}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell style={{ width: "250px" }}>badges</TableCell>
              {badges.map((photos, index) => (
                <TableCell key={photos[0]}>
                  <Box display="flex">
                    {photos.map((badge) => (
                      <Avatar
                        sx={{ bgcolor: "gray" }}
                        variant="square"
                        alt="badge"
                        src={badge}
                        className={classes.badge}
                      />
                    ))}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              const diff = state.differentsKeys[row[0]] ? true : false;
              return (
                <TableRow
                  style={{ background: diff ? "#ccc" : "transparent" }}
                  key={row[0]}
                >
                  {row.map((cell, i) => {
                    return (
                      <TableCell key={`${row[0]}-${cell}-${i}`}>
                        {cell}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsTable;
