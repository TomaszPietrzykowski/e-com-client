import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    color: "white",
  },
  container: {
    maxWidth: 1300,
    margin: "auto",
    padding: " 0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    padding: "0.2rem 2rem",
    fontFamily: "Open Sans",
    fontWeight: 500,
    textDecoration: "none",
    fontSize: "0.7rem",
    letterSpacing: 0.5,
    color: "white",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.common.blue,
    },
  },
}));

const DevTag = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <a
          className={classes.tag}
          href="https://github.com/TomaszPietrzykowski"
          rel="noopener noreferrer"
          target="_blank"
        >
          {"<Developer />"}
        </a>
      </div>
    </div>
  );
};

export default DevTag;
