import React from "react";
import { makeStyles } from "@material-ui/styles";
import TruckIcon from "@material-ui/icons/LocalShipping";
import CheckIcon from "@material-ui/icons/CheckRounded";
import GiftIcon from "@material-ui/icons/Redeem";
import ChatIcon from "@material-ui/icons/ChatBubble";
import SearchIcon from "@material-ui/icons/Search";

import Showcase from "../home/Showcase";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "auto",
    marginTop: 140,
    marginBottom: "100vh",
    padding: "15px",
    [theme.breakpoints.down("md")]: {
      marginTop: 100,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 70,
    },
  },

  desktopLinks: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "10px 0px",
    borderBottom: "1px solid #eee",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
    color: theme.palette.primary.main,
    fontSize: 13,
    marginRight: "0.4rem",
  },
  mobileLinks: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      padding: "10px 0px",
      borderBottom: "1px solid #eee",
    },
  },
  mobileTab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: 13,
  },
  mobileTabHide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  searchMobile: {
    display: "none",
    outline: "none",
    width: "100%",
    paddingTop: "1rem",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  inputMobile: {
    width: "calc(100% - 80px)",
    outline: "none",
    padding: "6px 10px",
    borderRadius: 0,
    fontSize: "15px",
    fontFamily: "inherit",
    border: `1px solid ${theme.palette.primary.main}`,
  },
  searchBtnMobile: {
    height: "45px",
    width: "45px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    border: "none",
    backgroundColor: theme.palette.primary.main,
    outline: "none",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      height: "35px",
      width: "35px",
    },
  },
  searchIconMobile: {
    color: "white",
    height: "20px",
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

      <div className={classes.mobileLinks}>
        <div className={classes.mobileTabHide}>
          <div className={classes.mobileTab}>
            <CheckIcon className={classes.desktopIcon} />
            <div className={classes.desktopText}>
              Darmowa przesyłka od 100pln
            </div>
          </div>
        </div>
        <div className={classes.mobileTab}>
          <GiftIcon className={classes.desktopIcon} />
          <div className={classes.desktopText}>Upominek powyżej 80pln</div>
        </div>
      </div>

      <form className={classes.searchMobile}>
        <input
          type="text"
          className={classes.inputMobile}
          placeholder="Szukaj..."
        />
        <button type="submit" className={classes.searchBtnMobile}>
          <SearchIcon className={classes.searchIconMobile} />
        </button>
      </form>

      <Showcase />
    </div>
  );
};

export default Home;
