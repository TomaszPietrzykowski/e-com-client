import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import EmailIcon from "@material-ui/icons/AlternateEmailSharp";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.common.lightPink,
  },
  container: {
    maxWidth: 1300,
    padding: "15px 0px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // border: "1px solid blue",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
  },
  emailIcon: {
    color: theme.palette.primary.main,
    fontSize: "3rem",
    marginLeft: "2rem",
    textShadow: "1px 1px 3px rgba(0,0,0,.4)",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0rem 3rem 0rem 1rem",
    color: "white",
    // border: "1px solid green",
    flex: 1,
    [theme.breakpoints.down("md")]: {
      padding: "0rem .5rem",
    },
  },
  titleHeader: {
    fontFamily: "Bree Serif",
    fontSize: "1.8rem",
    letterSpacing: 3,
    textShadow: "1px 1px 3px rgba(0,0,0,.4)",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3rem",
    },
  },
  titleText: {
    fontFamily: "Open Sans",
    fontSize: "1rem",
    textShadow: "1px 1px 3px rgba(0,0,0,.4)",
    [theme.breakpoints.down("md")]: {
      marginTop: ".2rem",
      fontSize: ".85rem",
    },
  },
  form: {
    display: "flex",
    // border: "1px solid orange",
    height: 40,
    flex: 1,
    justifyContent: "flex-end",
    marginRight: "3rem",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginTop: "2rem",
      width: "100%",
      justifyContent: "center",
      height: "35px",
    },
  },
  input: {
    minWidth: "50%",
    outline: "none",
    padding: "6px 10px",
    borderRadius: 0,
    fontSize: "15px",
    fontFamily: "Open Sans",
    border: `1px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down("md")]: {
      minWidth: "65%",
    },
  },
  submitBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "Bree Serif",
    letterSpacing: 1,
    padding: "10px 16px",
    borderRadius: 0,
    border: "none",
    backgroundColor: theme.palette.primary.main,
  },
}));

const Newsletter = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.flexContainer}>
          <EmailIcon className={classes.emailIcon} />
          <div className={classes.title}>
            <div className={classes.titleHeader}> Bądź na bieżąco!</div>
            <div className={classes.titleText}>
              Zapisz się na nasz newsletter.
            </div>
          </div>
        </div>

        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Twoj e-mail..."
            value={email}
            className={classes.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className={classes.submitBtn}>
            Zapisz
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
