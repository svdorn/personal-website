import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { linkIsActive } from "../miscFunctions";
import { css, withStyles } from "../withStyles";

const menuItems = [
  { name: "About", link: "#about" },
  { name: "Tech", link: "#tech" },
  { name: "Stocks", link: "#stocks" },
  { name: "Contact", link: "#contact" }
];

class Header extends React.Component {
  render() {
    const { location, styles } = this.props;

    return (
      <nav {...css(styles.container)}>
        <Link to="/">
          <img
            {...css(styles.terminal)}
            src="/images/terminal-white.svg"
            alt="Terminal"
          />
        </Link>
        <div {...css(styles.menu_items)}>
          {menuItems.map(item => (
            <a
              key={item.name}
              href={item.link}
              {...css(
                styles.menu_item,
                linkIsActive(item.link, location) && styles.link_bold
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};

export default withRouter(
  withStyles(({ color }) => ({
    container: {
      padding: "10px 20px 20px"
    },

    terminal: {
      display: "inline-block",
      float: "left",
      height: "50px"
    },

    social: {
      display: "inline-block",
      marginTop: "13px",
      float: "right"
    },

    menu_items: {
      display: "flex",
      float: "right",
      marginTop: "20px"
    },

    menu_item: {
      padding: "0 15px",
      textDecoration: "none",
      textAlign: "left",
      color: "white",
      fontWeight: "600",
      opacity: "0.6",
      ":hover": {
        opacity: "0.8"
      }
    },

    link_bold: {
      fontWeight: "800"
    }
  }))(Header)
);
