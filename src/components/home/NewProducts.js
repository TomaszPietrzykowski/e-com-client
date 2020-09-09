import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "auto",
    padding: "0px 15px",
  },
  sliderHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productTab: {
    minHeight: 150,
    border: "1px solid red",
    margin: ".3rem",
    minWidth: 100,
    flex: 1,
  },
  headerText: {
    padding: "15px",
    width: "180px",
    border: "1px solid red",
    fontFamily: "Bree Serif",
    fontSize: "18px",
    textAlign: "center",
  },
  newProductsSlider: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const NewProducts = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.sliderHeader}>
        <div className={classes.headerText}>Nowości</div>
      </div>
      <div className={classes.newProductsSlider}>
        <div className={classes.productTab}>Prod1</div>
        <div className={classes.productTab}>Prod2</div>
        <div className={classes.productTab}>Prod3</div>
        <div className={classes.productTab}>Prod4</div>
      </div>
    </div>
  );
};

export default NewProducts;
