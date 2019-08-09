import React from "react";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import Social from "./Social";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { linkIsActive } from "../miscFunctions";
import { css, withStyles } from "../withStyles";

const menuItems = [
  { name: "About", link: "/about" },
  { name: "Experience", link: "/experience" },
  { name: "Contact", link: "/contact" }
];

class Header extends React.Component {
  render() {
    const { location, styles } = this.props;

    return (
      <div {...css(styles.container)}>
        <Link to="/">
          <Icon {...css(styles.icon)}>code</Icon>
        </Link>
        <div {...css(styles.social)}>
          <Social />
        </div>
        <div {...css(styles.menu_items)}>
          {menuItems.map(item => (
            <Link
              key={item.name}
              to={item.link}
              {...css(
                styles.menu_item,
                linkIsActive(item.link, location) && styles.link_bold
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
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

    icon: {
      display: "inline-block",
      float: "left",
      color: color.primary,
      fontSize: "60px",
      fontWeight: "1000",
      alignItems: "center"
    },

    social: {
      display: "inline-block",
      marginLeft: "50px",
      marginTop: "15px",
      float: "left"
    },

    menu_items: {
      display: "inline-block",
      float: "right",
      marginTop: "15px"
    },

    menu_item: {
      margin: "auto 15px",
      textDecoration: "none",
      color: "black",
      fontWeight: "400"
    },

    link_bold: {
      fontWeight: "700"
    }
  }))(Header)
);
