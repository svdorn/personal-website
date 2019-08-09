import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

function Contact({ styles }) {
  return <div>Contact</div>;
}

Contact.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({}))(Contact);
