import * as React from 'react';
import {FormGroup, FormControlLabel, Checkbox, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    alignItems:'start',
    marginBottom:4
  },
  label:{
    fontWeight:'bold',
    fontSize:10
  },
  heading:{
    color: "#2196f3",
    fontWeight:'bold',
    marginBottom:16,
  }
});
 const ProductsSelection = ({productNames, toggleProducts}) =>{
  const classes = useStyles();

    return(
    <FormGroup>
      <Typography className={classes.heading}>
        Je Selectie
      </Typography>
        {
          Object.keys(productNames).map(( product, index )=> 
          <FormControlLabel
          classes={{root:classes.root,label:classes.label}}
          onChange={()=>{toggleProducts(index, productNames[index].show)}}
          key={product} control={<Checkbox checked={productNames[index].show}  size="small" />} label={productNames[index].name} />)
        }
        
      </FormGroup>
      )
}
export default ProductsSelection