import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

function Home({ styles }) {
  return <div>Home</div>;
}

Home.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({}))(Home);
