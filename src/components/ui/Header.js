import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/arizoniadark.svg";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import UserIcon from "@material-ui/icons/Person";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import ExpandIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    fontFamily: "Open Sans, sans-serif",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1200,
  },
  container: {
    maxWidth: 1300,
    margin: "auto",
    padding: "0px 50px",
    [theme.breakpoints.down("md")]: {
      padding: "0px 15px",
    },
  },
  navbar: {
    display: "flex",
    flexDirection: "column",
  },
  topBar: {
    backgroundColor: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 0px",
  },
  search: {
    display: "flex",
    outline: "none",
    minHeight: 35,
    width: "33%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  input: {
    minWidth: 200,
    outline: "none",
    padding: "6px 10px",
    borderRadius: 0,
    fontSize: "15px",
    fontFamily: "inherit",
    border: `1px solid ${theme.palette.primary.main}`,
  },
  searchBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    border: "none",
    backgroundColor: theme.palette.primary.main,
    outline: "none",
    cursor: "pointer",
  },
  searchIcon: {
    color: "white",
    height: "20px",
  },

  menuBtnContainer: {
    display: "none",
    outline: "none",
    minHeight: 35,
    width: "33%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      width: "auto",
    },
  },
  menuBtn: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
  },

  sideIconCart: {
    color: theme.palette.text.primary,
    height: "20px",
    marginLeft: "10px",
  },
  sideIconUser: {
    color: theme.palette.text.primary,
    height: "20px",
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  currentCartValue: {
    color: theme.palette.text.primary,
    fontSize: "13px",
    fontWeight: 700,
    marginLeft: "10px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  currentCartItems: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: "12px",
    fontWeight: 700,
    marginLeft: "10px",
    borderRadius: "50%",
    width: 20,
    height: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: "33%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  logo: {
    height: "4rem",
    [theme.breakpoints.down("md")]: {
      height: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2.4rem",
    },
  },
  icons: {
    display: "flex",
    width: "33%",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  menuBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  navigation: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    fontFamily: "Bree Serif",
    fontSize: "18px",
    margin: 0,
  },
  tab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 20px",
    cursor: "pointer",
  },
  expandIcon: {
    color: theme.palette.text.secondary,
    fontSize: "0.85rem",
    margin: "3px 0px 0px 5px",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <div className={classes.topBar}>
            <div className={classes.menuBtnContainer}>
              <MenuIcon className={classes.menuBtn} />
            </div>
            <form className={classes.search}>
              <input
                type="text"
                className={classes.input}
                placeholder="Szukaj..."
              />
              <button type="submit" className={classes.searchBtn}>
                <SearchIcon className={classes.searchIcon} />
              </button>
            </form>
            <div className={classes.logoContainer}>
              <img className={classes.logo} src={logo} alt="company logo" />
            </div>
            <div className={classes.icons}>
              <UserIcon className={classes.sideIconUser} />
              <div className={classes.currentCartValue}>0,00</div>
              <CartIcon className={classes.sideIconCart} />
              <div className={classes.currentCartItems}>2</div>
            </div>
          </div>

          <div className={classes.menuBar}>
            <ul className={classes.navigation}>
              <li className={classes.tab}>
                <div>Nowości</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Promocje</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Make Up</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Akcesoria</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Włosy</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Skóra</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Marki</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
