import React, { Fragment } from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header />
        <div className="App">App.js</div>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
