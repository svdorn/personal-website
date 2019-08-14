import React from "react";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import Social from "./Social";
import { css, withStyles } from "../withStyles";

function Footer({ styles }) {
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.social)}>
        <Social />
      </div>
      <div {...css(styles.by_stephen)}>
        <Icon {...css(styles.icon)}>code</Icon> with{" "}
        <Icon {...css(styles.icon)}>favorite</Icon> by Stephen Dorn
      </div>
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

  by_stephen: {
    color: "white"
  },

  icon: {
    verticalAlign: "middle"
  }
}))(Footer);
