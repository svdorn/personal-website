import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
// import components
import Header from "./components/Header";
// import pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import Tech from "./pages/Tech";
import { css, withStyles } from "./withStyles";

function App({ styles }) {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <div {...css(styles.container)}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/stocks" component={Stocks} />
          <Route path="/tech" component={Tech} />
        </div>
      </ScrollToTop>
    </Router>
  );
}

App.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  container: {
    textAlign: "center",
    padding: "50px 0",
    font: "15px intercom-text,system-ui"
  }
}))(App);
