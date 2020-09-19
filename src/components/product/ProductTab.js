import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import HeartIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2vmin",
    border: "1px solid green",
  },
  imageContainer: {
    height: "40%",
    border: "1px solid green",
  },
  img: {
    width: "100%",
    height: "100%",
    padding: ".5rem",
  },
  title: {
    fontFamily: "Open Sans",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: ".5rem",
    border: "1px solid blue",
    color: theme.palette.text.primary,
  },
  description: {
    fontFamily: "Bree Serif",
    fontSize: ".9rem",
    padding: ".5rem",
    color: theme.palette.text.secondary,
    border: "1px solid blue",
  },
  price: {
    padding: "1rem 0",
    fontFamily: "Open Sans",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  buttonsContainer: {
    display: "flex",
    width: "100%",
    cursor: "pointer",
  },
  cartBtn: {
    flex: 4,
    border: "1px solid green",
    padding: ".6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    fontFamily: "Bree Serif",
    // "&:hover": {
    //   color: "blue",
    // },
  },
  cartIcon: {
    fontSize: "1.6rem",
    marginRight: ".5rem",
  },
  wishlistBtn: {
    flex: 1,
    border: "1px solid green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ProductTab = ({ title, img, description, price }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img src={img} alt="product" className={classes.img} />
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{price}</div>
      <div className={classes.buttonsContainer}>
        <div className={classes.cartBtn}>
          <CartIcon className={classes.cartIcon} />
          <div>Do koszyka</div>
        </div>
        <div className={classes.wishlistBtn}>
          <HeartIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
