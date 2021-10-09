import { useState } from "react";

const useTable = () => {
  const [state, setstate] = useState(null);
  const structureData = (data, notCompared, comparableProducts) => {
    // temp veriable to store the different keys and comparable
    let differentsKeys = {};
    let comparableAttributes = {};
    let productNames = {};
    //make all proudects displayed by defult
    let showingProducts = [...Array(data.products.length).fill(true)];
    if (comparableProducts) {
      showingProducts = comparableProducts;
    }
    // looping over proudects
    data.products.forEach((product, index) => {
      productNames[index] = {
        name: product.name,
        show: showingProducts[index],
      };
      // get the diffrent values to highlight it
      Object.keys(data.products[index]).forEach((attrubute) => {
        if (!comparableAttributes[attrubute]) {
          comparableAttributes[attrubute] = data.products[index][attrubute];
        } else if (
          comparableAttributes[attrubute] !== data.products[index][attrubute]
        ) {
          if (showingProducts[index]) {
            differentsKeys[attrubute] = true;
          }
        }
      });
      console.log(comparableAttributes);
    });
    // remove the keys that we should not compare
    notCompared.forEach((attrubute) => {
      delete differentsKeys[attrubute];
    });
    // set state
    setstate({ differentsKeys, comparableAttributes, productNames });
  };
  return structureData
};
export default useTable;
