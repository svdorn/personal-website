import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

function Stocks({ styles }) {
  return <div>Home</div>;
}

Stocks.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({}))(Stocks);
