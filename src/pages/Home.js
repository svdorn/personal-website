import React from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Social from "../components/Social";
import { css, withStyles } from "../withStyles";

const people = [
  {
    name: "einstein",
    description: "View my scientific use of computers.",
    button: "View Projects",
    link: "/tech"
  },
  {
    name: "jobs",
    description: "Examine my entrepreneurial passion.",
    button: "View Entrepreneurship",
    link: "/about"
  },
  {
    name: "jfk",
    description: "See how I operate in the free market.",
    button: "View Stocks",
    link: "/stocks"
  }
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // strings that show up in the typer
    const typedStrings = [
      "Hello, World!",
      "my name is <b>Stephen Dorn</b>",
      "i am a computer scientist",
      "stock market enthusiast",
      "and entrepreneur"
    ];

    // options for the typer
    const options = {
      strings: typedStrings,
      typeSpeed: 40,
      backSpeed: 25,
      loop: true,
      loopCount: Infinity,
      backDelay: 1000
    };
    this.setState({ typed: new Typed(this.typedSpan, options) });
  }

  typedRef = typedSpan => (this.typedSpan = typedSpan);

  render() {
    const { styles } = this.props;

    return (
      <div {...css(styles.container)}>
        <section id="intro" {...css(styles.intro)}>
          <div {...css(styles.typed_container)}>
            <img
              src="/images/terminal-white.svg"
              alt="Terminal"
              {...css(styles.terminal)}
            />
            <span ref={this.typedRef} {...css(styles.typed)} />
          </div>
          <div {...css(styles.icons)}>
            {people.map(icon => (
              <div key={icon.name} {...css(styles.icon)}>
                <div {...css(styles.description)}>{icon.description}</div>
                <img
                  src={`/images/people/${icon.name}.png`}
                  alt={icon.name}
                  {...css(styles.icon_img)}
                />
                <br />
                <div {...css(styles.button)}>
                  <Link to={icon.link} {...css(styles.button_link)}>
                    <Button
                      text={icon.button}
                      colors={["white"]}
                      textColor={["#f46a54"]}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div {...css(styles.social)}>
            <Social />
          </div>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(({ color }) => ({
  container: {
    marginTop: "-80px"
  },
  intro: {
    backgroundColor: color.primary,
    height: "calc(100vh)",
    minHeight: "600px",
    "@media (max-width: 1000px)": {
      height: "700px"
    },
    "@media (max-width: 500px)": {
      height: "750px"
    }
  },

  typed_container: {
    verticalAlign: "middle",
    paddingTop: "15%",
    fontWeight: "800px",
    fontSize: "44px",
    color: "white",
    "@media (max-width: 1000px)": {
      paddingTop: "150px",
      fontSize: "32px"
    },
    "@media (max-width: 500px)": {
      paddingTop: "150px",
      fontSize: "25px"
    }
  },

  icons: {
    position: "absolute",
    color: "white",
    bottom: "15%",
    right: "0",
    left: "0",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (max-width: 1000px)": {
      position: "relative",
      paddingTop: "50px",
      bottom: "auto"
    }
  },

  icon: {
    display: "inline-block",
    padding: "0 30px",
    "@media (max-width: 1000px)": {
      padding: "10px 20px"
    }
  },

  icon_img: {
    padding: "10px 0",
    height: "120px",
    "@media (max-width: 1000px)": {
      height: "70px"
    }
  },

  description: {
    fontSize: "18px",
    fontWeight: "600",
    "@media (max-width: 1000px)": {
      fontSize: "15px"
    }
  },

  terminal: {
    display: "inline-block",
    verticalAlign: "middle",
    height: "60px",
    paddingRight: "30px",
    "@media (max-width: 1000px)": {
      height: "40px",
      paddingRight: "15px"
    },
    "@media (max-width: 500px)": {
      height: "30px"
    }
  },

  typed: {
    display: "inline-block",
    verticalAlign: "middle"
  },

  social: {
    position: "absolute",
    bottom: "4%",
    right: "0",
    left: "0",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (max-width: 1000px)": {
      position: "relative",
      bottom: "auto",
      paddingTop: "20px"
    }
  },

  button: {
    display: "block",
    "@media (max-width: 1000px)": {
      display: "none"
    }
  },

  button_link: {
    textDecoration: "none"
  }
}))(Home);
