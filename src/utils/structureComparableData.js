const structureData = (data, notCompared, callback) => {
  let differentsKeys = {};
  let comparableAttributes = {};
  let productNames = {};
  data.products.forEach((product, index) => {
    Object.keys(data.products[index]).forEach((attrubute) => {
      if (attrubute === "name") {
        productNames[index] = {
          name: data.products[index].name,
          show: true,
        };
      }
      if (!comparableAttributes[attrubute]) {
        comparableAttributes[attrubute] = data.products[index][attrubute];
      } else {
        differentsKeys[attrubute] = true;
      }
    });
  });
  notCompared.forEach((attrubute) => {
    delete differentsKeys[attrubute];
  });
  
  callback({ differentsKeys, comparableAttributes, productNames });
};
export default structureData;
