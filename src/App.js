import React from "react";
import PropTypes from "prop-types";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
// import pages
import Home from "./pages/Home";
import { css, withStyles } from "./withStyles";

function App({ styles }) {
  return (
    <div>
      <Header {...css(styles.header)} />
      <div {...css(styles.container)}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    textAlign: "center",
    padding: "50px 0",
    font: "15px intercom-text,system-ui",
    scrollBehavior: "smooth"
  },

  header: {
    backgroundColor: "transparent"
  }
}))(App);
