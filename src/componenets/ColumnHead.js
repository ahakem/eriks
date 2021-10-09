import * as React from "react";
import {Box, Typography} from "@mui/material";
import Avatar from '@mui/material/Avatar';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root:{
    borderBottom: '1px solid #ccc',
    paddingBottom:16,
  },
  name: {
    fontWeight: "bold",
    fontSize: 13,
    color:"#2196f3",
    marginTop:16,
    marginBottom:16,
    maxWidth:150,
  },
  price:{
    fontSize:18,
    fontWeight: "bold",
  },
  lable:{
    fontSize:13,
    color:"#ccc"
  }
});
const ColumnHead = (props) => {
  const {img,price, name} = props
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar sx={{ }} 
        variant="square"
        alt={name}
        src={img}
        sx={{bgcolor: "#2196f3", width: 100, height: 100 }}
      />
       <Typography className={classes.name}>{name}</Typography>
       <Typography className={classes.price}>{price}</Typography>
       <Typography className={classes.lable}>per stuk /excl btw</Typography>

    </Box>
  );
};
export default ColumnHead;
