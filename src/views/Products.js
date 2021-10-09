import { useEffect, useState } from "react";
import { data, notCompared } from "../data/products";
import ReactVirtualizedTable from "../componenets/Table";
import structureData from "../utils/structureComparableData";
const Products = () => {
  const [state, setstate] = useState(null);

  useEffect(() => {
    structureData(data, notCompared, setstate);
  }, []);
  useEffect(() => {
    state && console.log(state.productNames)
  });

  if (!state) return <div>Loading...</div>;
  return <ReactVirtualizedTable state={state} columns={data.products} />;
};

export default Products;
