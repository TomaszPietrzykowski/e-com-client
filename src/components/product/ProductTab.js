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
    // margin: "3vmin",
    "&:hover $buttonsContainer": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      transform: "scale(1,1)",
    },
  },
  imageContainer: {
    height: "40%",
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
    color: theme.palette.text.primary,
  },
  description: {
    fontFamily: "Bree Serif",
    fontSize: ".9rem",
    padding: ".5rem",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  price: {
    padding: "1rem 0",
    fontFamily: "Open Sans",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  buttonsContainer: {
    display: "flex",
    width: "90%",
    margin: "auto",
    cursor: "pointer",
    color: theme.palette.common.white,
    transition: "all .15s",
    transform: "scale(0,0)",
  },
  cartBtn: {
    flex: 4,
    padding: ".6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    fontFamily: "Bree Serif",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  cartIcon: {
    fontSize: "1.6rem",
    marginRight: ".5rem",
  },
  wishlistBtn: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const ProductTab = ({
  title,
  img,
  description,
  price,
  slidesAtOnce,
  activeIndex,
}) => {
  const classes = useStyles();

  const slideWidth = 100 / slidesAtOnce;

  return (
    <div
      className={classes.root}
      style={{
        minWidth: `${slideWidth}%`,
        transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
        transition: "transform .5s",
      }}
    >
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
