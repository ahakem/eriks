import { useEffect, useState } from "react";
import { data, notCompared } from "../data/products";
import ReactVirtualizedTable from "../componenets/Table";
import structureData from "../utils/structureComparableData";
const Products = () => {
  const [state, setstate] = useState(null);

  useEffect(() => {
    structureData(data, notCompared, state, setstate);
  }, []);
  useEffect(() => {
    state && console.log(state.differentsKeys,Object.keys(state.differentsKeys).length)
  });

  const toggleProducts = (index, ProductState) =>{
    structureData(data, notCompared,state, setstate,{index, ProductState})
  }

  if (!state) return <div>Loading...</div>;
  return <ReactVirtualizedTable toggleProducts={toggleProducts} state={state} columns={data.products} />;
};

export default Products;
