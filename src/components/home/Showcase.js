import React from "react";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import banner from "../../assets/banner.png";
import bannerMobile from "../../assets/bannerMobile.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0px 15px",
    margin: "40px 50px",
    minHeight: 420,
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: 7,
  },
  containerMobile: {
    padding: "0px 15px",
    margin: "30px 0px",
    minHeight: 300,
    backgroundImage: `url(${bannerMobile})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: 7,
    marginBottom: "80vh",
    [theme.breakpoints.down("md")]: {
      margin: "30px 0px 20px 0px",
    },
  },
}));

const Showcase = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const classes = useStyles();

  return (
    <div
      className={isMobile ? classes.containerMobile : classes.container}
    ></div>
  );
};

export default Showcase;
