import { useEffect, useState } from "react";
import { data, notCompared } from "../data/products";
import { Container} from "@mui/material";

import Table from "../componenets/Table";
import structureData from "../utils/structureComparableData";
const Products = () => {
  const [state, setstate] = useState(null);

  useEffect(() => {
    structureData(data, notCompared, state, setstate);
  }, []);


  const toggleProducts = (index, ProductState) =>{
    structureData(data, notCompared,state, setstate,{index, ProductState})
  }

  if (!state) return <div>Loading...</div>;
  return <Container>
      <Table toggleProducts={toggleProducts} state={state} columns={data.products} />
      </Container>;
};

export default Products;
