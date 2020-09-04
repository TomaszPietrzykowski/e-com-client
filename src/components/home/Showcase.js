import React from "react";
import { makeStyles } from "@material-ui/styles";
import banner from "../../assets/banner.png";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0px 15px",
    margin: "40px 50px",
    minHeight: 420,
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    borderRadius: 7,
    marginBottom: "80vh",
  },
}));

const Showcase = () => {
  const classes = useStyles();
  return <div className={classes.container}></div>;
};

export default Showcase;
