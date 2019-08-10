import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

function Tech({ styles }) {
  return <div>Home</div>;
}

Tech.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({}))(Tech);
