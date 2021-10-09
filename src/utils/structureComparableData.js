
const structureData = (data, notCompared) => {
    let differentsKeys = {};
    let comparableAttributes = {};
    data.products.forEach((product, index) => {
      // debugger
      Object.keys(data.products[index]).forEach((attrubute) => {
        if(!comparableAttributes[attrubute]){
          comparableAttributes[attrubute] = data.products[index][attrubute]
        } else{
          differentsKeys[attrubute]= true
        }
      });
    });
    // console.log(differentsKeys, Object.keys(differentsKeys).length)
    notCompared.forEach(attrubute => {
      delete differentsKeys[attrubute]
    });
    // console.log(comparableAttributes, Object.keys(comparableAttributes).length)
    // console.log(differentsKeys, Object.keys(differentsKeys).length)
    return{
      differentsKeys, comparableAttributes
    }
  };
  export default structureData