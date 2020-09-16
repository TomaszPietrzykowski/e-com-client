import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  container: {
    maxWidth: 1300,
    margin: "auto",
    padding: "0px 15px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>footer</div>
    </div>
  );
};

export default Footer;
