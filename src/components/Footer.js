import React from "react";
import PropTypes from "prop-types";
import Social from "./Social";
import { css, withStyles } from "../withStyles";

function Footer({ styles }) {
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.social)}>
        <Social />
      </div>
      <div {...css(styles.copyright)}>Copyright &copy;2019 Stephen Dorn</div>
    </div>
  );
}

Footer.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    height: "100px",
    backgroundColor: color.primary,
    textAlign: "center"
  },

  social: {
    padding: "20px 0 10px"
  },

  copyright: {
    color: "white"
  }
}))(Footer);
