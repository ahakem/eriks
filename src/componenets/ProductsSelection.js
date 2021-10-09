import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    // backgroundColor: 'red',
    alignItems:'start',
    marginBottom:4
  },
  label:{
    fontWeight:'bold',
    fontSize:10
  }
});
 const ProductsSelection = ({productNames}) =>{
  const classes = useStyles();

    return(
    <FormGroup>
        {
          Object.keys(productNames).map(( product, index )=> 
          <FormControlLabel
          classes={{root:classes.root,label:classes.label}}
          key={product} control={<Checkbox defaultChecked  size="small" />} label={productNames[index].name} />)
        }
        
      </FormGroup>
      )
}
export default ProductsSelection