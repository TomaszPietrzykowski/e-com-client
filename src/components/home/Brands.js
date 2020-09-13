import React from "react";
import { makeStyles } from "@material-ui/styles";
// import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "auto",
    padding: "0px 15px",
    marginTop: "6rem",
    [theme.breakpoints.down("md")]: {
      padding: "0px",
    },
  },

  brandsHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
  },
  brandsContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  brandTab: {
    minWidth: "80px",
    minHeight: "80px",
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
    // border: "1px solid red",
    fontFamily: "Bree Serif",
    fontSize: "1.5rem",
    textAlign: "center",
    position: "relative",
    "&:after": {
      content: '""',
      width: "70px",
      height: "2px",
      background: theme.palette.primary.main,
      position: "absolute",
      top: "50%",
      left: "-70px",
    },
    "&:before": {
      content: '""',
      width: "70px",
      height: "2px",
      background: theme.palette.primary.main,
      position: "absolute",
      top: "50%",
      right: "-70px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      "&:before, &:after": {
        height: "1px",
        width: "50px",
      },
    },
  },
}));

const Brands = ({ title }) => {
  const classes = useStyles();
  //   const isTablet = useMediaQuery("(max-width: 990px)");
  //   const isMobile = useMediaQuery("(max-width: 600px)");
  //   const slides = isMobile ? 2 : isTablet ? 3 : 5;

  return (
    <div className={classes.container}>
      <div className={classes.brandsHeader}>
        <div className={classes.headerText}>Marki</div>
      </div>
      <div className={classes.brandsContainer}>
        <div className={classes.brandTab}></div>
      </div>
    </div>
  );
};

export default Brands;
