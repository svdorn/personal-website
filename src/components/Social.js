import React from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

const icons = [
  { name: "twitter", href: "" },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/stephen-dorn-149055a3/"
  },
  { name: "github", href: "https://github.com/svdorn" },
  { name: "facebook", href: "https://www.facebook.com/stephen.dorn.1" },
  { name: "instagram", href: "https://www.instagram.com/stephen.dorn/" }
];

function Social({ styles }) {
  return (
    <div {...css(styles.container)}>
      {icons.map(icon => (
        <a
          {...css(styles.image)}
          href={icon.href}
          target="_blank"
          key={icon.name}
        >
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
