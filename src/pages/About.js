import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

function About({ styles }) {
  return <div>About</div>;
}

About.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({}))(About);
