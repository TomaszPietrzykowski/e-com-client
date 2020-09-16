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
    minHeight: 200,
    margin: "auto",
    padding: "0px 15px",
  },
  gridContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
  },
  columnHeader: {
    fontFamily: "Bree Serif",
    fontSize: "1.2rem",
    padding: ".8rem .3rem",
  },
  link: {
    fontFamily: "Open Sans",
    fontSize: ".9rem",
    padding: ".3rem",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.gridContainer}>
          <div className={classes.column}>
            <div className={classes.columnHeader}>Moje konto</div>
            <div className={classes.link}>Utworz konto</div>
            <div className={classes.link}>Koszyk</div>
            <div className={classes.link}>Moje transakcje</div>
            <div className={classes.link}>Modyfikuj subskrypcje</div>
          </div>
          <div className={classes.column}>
            <div className={classes.columnHeader}>Fjufjushop</div>
            <div className={classes.link}>Kontakt</div>
            <div className={classes.link}>Informacje</div>
            <div className={classes.link}>Mozliwosci wspolpracy</div>
            <div className={classes.link}>Pomoc</div>
          </div>
          <div className={classes.column}>
            <div className={classes.columnHeader}>Regulaminy</div>
            <div className={classes.link}>Warunki ogolne</div>
            <div className={classes.link}>Dostawa</div>
            <div className={classes.link}>Reklamacje i zwroty</div>
            <div className={classes.link}>Promocje</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
