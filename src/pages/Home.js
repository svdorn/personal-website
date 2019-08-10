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
        <section id="entrepreneur" {...css(styles.entrepreneur)}>
          <div {...css(styles.entrepreneur_moonshot)}>
            <div {...css(styles.company_logo_container)}>
              <img
                src="/images/moonshot-insights.png"
                alt="Moonshot Logo"
                {...css(styles.company_logo)}
              />
            </div>
            <div {...css(styles.moonshot_description)}>
              <h1>Moonshot Insights</h1>
              <h3 {...css(styles.company_title)}>Co-founder & CTO</h3>
              <p>
                I am the Co-founder and CTO at Moonshot Insights where we help
                companies build their company cultures through hiring.
              </p>
              <div>
                <a
                  href="https://moonshotinsights.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...css(styles.company_icon_clickable)}
                >
                  <img
                    src="/images/link.svg"
                    alt="Moonshot Insights"
                    {...css(styles.company_icon)}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/18233111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...css(styles.company_icon_clickable)}
                >
                  <img
                    src="/images/social/linkedin.svg"
                    alt="Moonshot Insights LinkedIn"
                    {...css(styles.company_icon)}
                  />
                </a>
              </div>
            </div>
          </div>
          <div {...css(styles.entrepreneur_paws)}>
            <div {...css(styles.paws_description)}>
              <h1>Senior Paws Sanctuary</h1>
              <h3 {...css(styles.company_title)}>
                Co-founder & Website Developer
              </h3>
              <p>
                I am the Co-founder and web developer at Senior Paws Sanctuary
                which is a non-profit senior dog rescue located in Madison, WI.
              </p>
              <div>
                <a
                  href="http://seniorpawssanctuarywi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...css(styles.company_icon_clickable)}
                >
                  <img
                    src="/images/link.svg"
                    alt="Senior Paws Sanctuary"
                    {...css(styles.company_icon)}
                  />
                </a>
                <a
                  href="https://www.facebook.com/seniorpawssanctuarywi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...css(styles.company_icon_clickable)}
                >
                  <img
                    src="/images/social/facebook.svg"
                    alt="Senior Paws Sanctuary Facebook"
                    {...css(styles.company_icon)}
                  />
                </a>
              </div>
            </div>
            <div {...css(styles.company_logo_container)}>
              <img
                src="/images/pawprint.png"
                alt="Senior Paws Sanctuary Logo"
                {...css(styles.company_logo)}
              />
            </div>
          </div>
        </section>
        <section id="tech" {...css(styles.tech)}>
          Tech
        </section>
        <section id="stocks" {...css(styles.stocks)}>
          Stocks
        </section>
        <section id="contact" {...css(styles.contact)}>
          Contact
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
  },

  tech: {
    padding: "100px"
  },

  stocks: {
    padding: "100px"
  },

  contact: {
    padding: "100px"
  },

  entrepreneur: {
    padding: "40px",
    color: color.black
  },

  entrepreneur_moonshot: {
    padding: "30px",
    display: "inline-flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },

  entrepreneur_paws: {
    padding: "30px",
    display: "inline-flex",
    justifyContent: "space-around",
    flexWrap: "wrap-reverse"
  },

  company_logo_container: {
    height: "220px",
    width: "220px",
    backgroundColor: color.primary,
    borderRadius: "50%"
  },

  moonshot_description: {
    margin: "auto 0 auto 60px",
    maxWidth: "500px",
    "@media (max-width: 940px)": {
      margin: "auto 30px"
    },
    "@media (max-width: 600px)": {
      margin: "auto 10px"
    }
  },

  paws_description: {
    margin: "auto 60px auto 0",
    maxWidth: "500px",
    "@media (max-width: 940px)": {
      margin: "auto 30px"
    },
    "@media (max-width: 600px)": {
      margin: "auto 10px"
    }
  },

  company_title: {
    marginTop: "-10px",
    marginBottom: "10px",
    fontWeight: "600"
  },

  company_logo: {
    paddingTop: "60px",
    height: "100px"
  },

  company_icon_clickable: {
    margin: "0 5px",
    opacity: "0.4",
    ":hover": {
      opacity: "0.6"
    }
  },

  company_icon: {
    height: "34px"
  }
}))(Home);
