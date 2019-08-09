import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

const icons = [
  { name: "twitter", href: "" },
  { name: "linkedin", href: "" },
  { name: "github", href: "" },
  { name: "facebook", href: "" },
  { name: "instagram", href: "" }
];

function Social({ styles }) {
  return (
    <div {...css(styles.container)}>
      {icons.map(icon => (
        <a {...css(styles.image)} href={icon.href} key={icon.name}>
          <img src={`/images/social/${icon.name}.png`} alt={icon.name} />
        </a>
      ))}
    </div>
  );
}

Social.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  container: {
    display: "inline-block"
  },

  image: {
    margin: "0 5px",
    opacity: "0.4",
    ":hover": {
      opacity: "0.6"
    }
  }
}))(Social);
