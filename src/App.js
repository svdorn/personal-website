import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
// import pages
import Home from "./pages/Home";
import { css, withStyles } from "./withStyles";

function App({ styles }) {
  return (
    <Router>
      <Header {...css(styles.header)} />
      <div {...css(styles.container)}>
        <Route path="/" component={Home} />
      </div>
      <Footer />
    </Router>
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
