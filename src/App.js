import React, { Fragment } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Header from "./components/ui/Header";
import Home from "./components/pages/Home";
import Newsletter from "./components/ui/Newsletter";
import Footer from "./components/ui/Footer";
import DevTag from "./components/ui/DevTag";
import BottomNav from "./components/ui/BottomNav";
import BottomNavMargin from "./components/ui/BottomNavMargin";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header />
        <Home />
        <Newsletter />
        <Footer />
        <DevTag />
        {isMobile && (
          <Fragment>
            <BottomNavMargin />
            <BottomNav />
          </Fragment>
        )}
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
