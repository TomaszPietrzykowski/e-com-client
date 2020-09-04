import React from "react";
import { makeStyles } from "@material-ui/styles";
import TruckIcon from "@material-ui/icons/LocalShipping";
import CheckIcon from "@material-ui/icons/CheckRounded";
import GiftIcon from "@material-ui/icons/Redeem";
import ChatIcon from "@material-ui/icons/ChatBubble";

import Showcase from "../home/Showcase";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "auto",
    marginTop: 140,
  },
  desktopLinks: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "10px 0px",
    borderBottom: "1px solid #eee",
  },
  desktopTab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: 13,
  },
  desktopIcon: {
    color: "#f02a67",
    fontSize: 13,
    marginRight: "0.4rem",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.desktopLinks}>
        <div className={classes.desktopTab}>
          <TruckIcon className={classes.desktopIcon} />
          <div className={classes.desktopText}>Dostawa następnego dnia</div>
        </div>
        <div className={classes.desktopTab}>
          <CheckIcon className={classes.desktopIcon} />
          <div className={classes.desktopText}>Darmowa przesyłka od 100pln</div>
        </div>
        <div className={classes.desktopTab}>
          <GiftIcon className={classes.desktopIcon} />
          <div className={classes.desktopText}>Upominek powyżej 80pln</div>
        </div>
        <div className={classes.desktopTab}>
          <ChatIcon className={classes.desktopIcon} />
          <div className={classes.desktopText}>Bezpłatne porady experta</div>
        </div>
      </div>

      <Showcase />
    </div>
  );
};

export default Home;
