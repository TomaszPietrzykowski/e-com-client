import React from "react";
// material-ui
import { makeStyles } from "@material-ui/styles";
// custom
import teaser1 from "../../assets/teaser01.svg";
import teaser2 from "../../assets/teaser02.svg";
import teaser3 from "../../assets/teaser03.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "50px",
    display: "flex",
    justifyContent: "space-between",
    // border: "1px solid blue",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: 0,
    },
  },
  teaser: {
    minHeight: 280,
    // border: "1px solid green",
    // backgroundImage: `url(${teaser1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "32%",
    borderRadius: 7,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "20px 0px",
    },
  },
  //   teaser2: {
  //     minHeight: 300,
  //     border: "1px solid green",
  //     backgroundImage: `url(${teaser1})`,
  //     backgroundPosition: "center",
  //     backgroundSize: "100% 100%",
  //     width: "30%",
  //     borderRadius: 7,
  //   },
  //   teaser3: {
  //     minHeight: 300,
  //     border: "1px solid green",
  //     backgroundImage: `url(${teaser1})`,
  //     backgroundPosition: "center",
  //     backgroundSize: "100% 100%",
  //     width: "30%",
  //     borderRadius: 7,
  //   },
}));

const Teasers = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div
        className={classes.teaser}
        style={{ backgroundImage: `url(${teaser1})` }}
      ></div>
      <div
        className={classes.teaser}
        style={{ backgroundImage: `url(${teaser2})` }}
      ></div>
      <div
        className={classes.teaser}
        style={{ backgroundImage: `url(${teaser3})` }}
      ></div>
    </div>
  );
};

export default Teasers;
