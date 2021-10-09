import { useEffect, useState } from "react";
import { notCompared } from "../data/products";
import { Container } from "@mui/material";

import Table from "../componenets/Table";
import structureData from "../utils/structureComparableData";
const axios = require("axios").default;

const Products = () => {
  const [state, setstate] = useState(null);
  const [OrignalData, setOrignalData] = useState(null);

  useEffect(() => {
    axios
      .get("http://5c35e7f96fc11c0014d32fcd.mockapi.io/compare/products")
      .then(function (response) {
        // handle success
        structureData(response.data, notCompared, state, setstate);
        setOrignalData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const toggleProducts = (index, productState) => {
    structureData(OrignalData, notCompared, state, setstate, {
      index,
      productState,
    });
  };

  if (!state || !OrignalData) return <div>Loading...</div>;
  return (
    <Container>
      <Table
        toggleProducts={toggleProducts}
        state={state}
        columns={OrignalData.products}
      />
    </Container>
  );
};

export default Products;
