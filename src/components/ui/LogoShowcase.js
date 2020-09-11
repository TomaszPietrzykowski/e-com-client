import React from "react";
import { makeStyles } from "@material-ui/styles";
import logo1 from "../../assets/fflogo01.svg";
import logo2 from "../../assets/fflogo02.svg";
import logo3 from "../../assets/fflogo03.svg";
import logo4 from "../../assets/fflogo04.svg";
import logo7 from "../../assets/fflogo07.svg";
import logo6 from "../../assets/fflogo06.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20rem",
  },
  image: {
    height: "20vmin",
    margin: "6rem 1rem",
  },
  text: {
    fontFamily: "Open sans",
    fontSize: "1.3rem",
  },
}));

const LogoShowcase = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.text}>moja propozycja:</div>
      <div className={classes.imageContainer}>
        <img src={logo3} className={classes.image} alt="logo" />
      </div>
      <div className={classes.text}>kilka innych pod rozwage:</div>
      <div className={classes.imageContainer}>
        <img src={logo1} className={classes.image} alt="logo" />
      </div>
      <div className={classes.imageContainer}>
        <img src={logo7} className={classes.image} alt="logo" />
      </div>
      <div className={classes.imageContainer}>
        <img src={logo2} className={classes.image} alt="logo" />
      </div>
      <div className={classes.imageContainer}>
        <img src={logo4} className={classes.image} alt="logo" />
      </div>
      <div className={classes.imageContainer}>
        <img src={logo6} className={classes.image} alt="logo" />
      </div>
    </div>
  );
};

export default LogoShowcase;
