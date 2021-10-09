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
  firstCell:{
    borderRight:"1px solid #ccc"
  }
  
});
const ProductsTable = ({ state, toggleProducts, columns }) => {
  const classes = useStyles();

  const rows = [];
  const badges = [];
  // special keys to take it out of the loop
  const specialKeys = ["badges", "productImage", "name"];

  const sortedFetures = Object.keys(columns[0]).sort(function(a, b){
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
})

sortedFetures.forEach((feature) => {
    if (specialKeys.indexOf(feature) === -1) {
      let obj = typeof(columns[0][feature]) !== "object" ?[feature] : [];
      let emptyValue = true
      state.showingProducts.forEach((bol, index) => {
        if (bol && typeof(columns[index][feature]) !== "object") {
          //don't draw row if all values are empty strings
          if(columns[index][feature] !=="" && emptyValue){
            emptyValue = false
          }
          obj.push(columns[index][feature]);
        }
      });
      !emptyValue && rows.push(obj);
    } else if (feature === "badges") {
      state.showingProducts.forEach((bol, index) => {
        if (bol) {
          badges.push(columns[index][feature].split("|"));
        }
      });
    }
  });

//Generate Headers
  const colHead = () => {
    const heads = [];
    columns.forEach((col, index) => {
      if (state.showingProducts[index]) {
        heads.push({
          comp: (
            <ColumnHead
              toggleProducts={toggleProducts}
              img={col.productImage}
              price={col.salePrice}
              name={col.name}
              index={index}
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
        <Table sx={{ minWidth: 650 }} aria-label="Comparizon table" size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.firstCell} style={{ width: "250px", borderBottom: 0 }}>
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
              <TableCell className={classes.firstCell}>badges</TableCell>
              {badges.map((photos, index) => (
                <TableCell key={`${photos[0]}-${index}`}>
                  <Box display="flex">
                    {photos.map((badge, badgeIndex) => (
                      <Avatar
                        key={`${badgeIndex}-${index}-${badge}`}
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
                  style={{ background: diff ? "#eee" : "transparent" }}
                  key={row[0]}
                >
                  {row.map((cell, i) => {
                    return (
                      <TableCell className={i === 0 ? classes.firstCell : ""} key={`${row[0]}-${cell}-${i}`}>
                        {i === 0 ? cell : <b>{cell}</b>}
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
