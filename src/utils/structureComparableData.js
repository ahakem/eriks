const structureData = (
  data,
  notCompared,
  state,
  callback,
  comparableProduct
) => {
  
  // temp veriable to store the different keys and comparable
  let differentsKeys = {};
  let comparableAttributes = {};
  let productNames = {};
  //make all proudects displayed by defult
  let showingProducts = state ? state.showingProducts : [...Array(data.products.length).fill(true)];
  if (comparableProduct) {
    showingProducts[comparableProduct.index] = !comparableProduct.ProductState;
  }
  // looping over proudects
  for (let index = 0; index < data.products.length; index++) {
    const product = data.products[index];
    productNames[index] = {
      name: product.name,
      show: showingProducts[index],
    };
    if (!showingProducts[index]){
      continue;
    }
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
  };
  // remove the keys that we should not compare
  notCompared.forEach((attrubute) => {
    delete differentsKeys[attrubute];
  });
  // set state
  callback({
    differentsKeys,
    comparableAttributes,
    productNames,
    showingProducts,
  });
};
export default structureData;
