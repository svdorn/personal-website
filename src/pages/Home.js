import React from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";
import { css, withStyles } from "../withStyles";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    // strings that show up in the typer
    const typedStrings = [
      "hello my name is <b>Stephen Dorn</b>",
      "i am a computer scientist",
      "stock market enthusiest",
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
      <div>
        <div {...css(styles.typed_container)}>
          <img
            src="/images/terminal.svg"
            alt="Terminal"
            {...css(styles.terminal)}
          />
          <span ref={this.typedRef} {...css(styles.typed)} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  typed_container: {
    verticalAlign: "middle",
    fontWeight: "800px",
    fontSize: "34px"
  },

  terminal: {
    display: "inline-block",
    verticalAlign: "middle",
    height: "50px",
    paddingRight: "30px"
  },

  typed: {
    display: "inline-block",
    verticalAlign: "middle"
  }
}))(Home);
