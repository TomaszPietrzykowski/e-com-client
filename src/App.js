import React, { Fragment } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";
import Home from "./components/pages/Home";
import Newsletter from "./components/ui/Newsletter";
import Footer from "./components/ui/Footer";
import DevTag from "./components/ui/DevTag";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header />
        <Home />
        <Newsletter />
        <Footer />
        <DevTag />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
