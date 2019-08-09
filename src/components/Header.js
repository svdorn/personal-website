import React from "react";
import PropTypes from "prop-types";
import Social from "./Social";
import { css, withStyles } from "../withStyles";

class Header extends React.Component {
  render() {
    const { styles } = this.props;

    return (
      <div {...css(styles.container)}>
        <b {...css(styles.name)}>Stephen Dorn</b>
        <Social />
      </div>
    );
  }
}

export default withStyles(({ color }) => ({
  container: {
    padding: "20px"
  },

  name: {
    display: "inline-block",
    float: "left",
    color: color.primary,
    fontSize: "34px",
    alignItems: "center"
  }
}))(Header);
