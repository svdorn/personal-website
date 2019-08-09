import React from "react";
import Header from "./components/Header";
import { css, withStyles } from "./withStyles";

function App({ styles }) {
  return (
    <div {...css(styles.container)}>
      <Header />
    </div>
  );
}

export default withStyles(() => ({
  container: {
    textAlign: "center"
  }
}))(App);
