import * as React from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    borderBottom: "1px solid #ccc",
    paddingBottom: 16,
  },
  name: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#2196f3",
    marginTop: 16,
    marginBottom: 16,
    maxWidth: 150,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lable: {
    fontSize: 13,
    color: "#ccc",
  },
  deletWraper:{
    display:"flex", 
    justifyContent:"end",
  },
  icon:{
    color:"#2196f3"
  }
});
const ColumnHead = (props) => {
  const { img, price, name, toggleProducts, index} = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.deletWraper}>
        <IconButton aria-label="delete"
        
        onClick={()=>{toggleProducts(index, true)}}

        >
          <DeleteIcon className={classes.icon}/>
        </IconButton>
      </Box>
      <Avatar
        variant="square"
        alt={name}
        src={img}
        sx={{ bgcolor: "#ccc", width: 100, height: 100 }}
      />
      <Typography className={classes.name}>{name}</Typography>
      <Typography className={classes.price}>{price}</Typography>
      <Typography className={classes.lable}>per stuk /excl btw</Typography>
    </Box>
  );
};
export default ColumnHead;
