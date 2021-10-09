import { useEffect, useState } from "react";
import "./App.css";
import {data, notCompared} from "./data/products";
import ReactVirtualizedTable from './componenets/Table'
import structureData from './utils/structureComparableData'
function App() {
  const [state, setstate] = useState(null)

  useEffect(() => {
    setstate(structureData(data, notCompared));
  }, []);
  useEffect(() => {
   console.log("state",state)
  })
  return <div className="App">
  <ReactVirtualizedTable columns={data.products}/>
 
  </div>;
}

export default App;
