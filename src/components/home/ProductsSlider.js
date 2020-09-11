import React from "react";
import { makeStyles } from "@material-ui/styles";
import Slider from "@farbenmeer/react-spring-slider";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "auto",
    padding: "0px 15px",
    [theme.breakpoints.down("md")]: {
      padding: "0px",
    },
  },
  sliderHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productTab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid red",
    margin: ".3rem",

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
    "& > :first-child": {
      height: "200px !important",
    },
  },
}));

// DB placeholder
const products = [
  { name: "Product 1" },
  { name: "Product 2" },
  { name: "Product 3" },
  { name: "Product 4" },
  { name: "Product 5" },
  { name: "Product 6" },
  { name: "Product 7" },
  { name: "Product 8" },
  { name: "Product 9" },
  { name: "Product 10" },
  { name: "Product 11" },
  { name: "Product 12" },
  { name: "Product 13" },
  { name: "Product 14" },
  { name: "Product 15" },
  { name: "Product 16" },
  { name: "Product 17" },
  { name: "Product 18" },
  { name: "Product 19" },
  { name: "Product 20" },
  { name: "Product 21" },
  { name: "Product 22" },
  { name: "Product 23" },
];

const ProductsSlider = ({ title }) => {
  const classes = useStyles();
  const isTablet = useMediaQuery("(max-width: 990px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const slides = isMobile ? 2 : isTablet ? 3 : 5;

  return (
    <div className={classes.container}>
      <div className={classes.sliderHeader}>
        <div className={classes.headerText}>{title}</div>
      </div>
      <div className={classes.newProductsSlider}>
        <Slider auto={4000} slidesAtOnce={slides} activeIndex={0}>
          {products.map((product) => (
            <div className={classes.productTab}>{product.name}</div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductsSlider;
