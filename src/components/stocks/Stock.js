import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import { css, withStyles } from "../../withStyles";

function Stock({ stock, styles }) {
  return (
    <a
      href={`https://finance.yahoo.com/quote/${stock.ticker}`}
      target="_blank"
      rel="noopener noreferrer"
      {...css(styles.container)}
    >
      <Box
        placement={stock.placement}
        color={stock.color}
        {...css(styles.box_container)}
      >
        <div {...css(styles.box)}>
          <h3 {...css(styles.title)}>{stock.name}</h3>
          <div style={{ color: stock.color }}>
            {stock.ticker}
            <br />
            <b {...css(styles.price)}>
              {stock.price ? <span>{stock.price}</span> : "$$$..."}
            </b>
          </div>
          <div {...css(styles.volume)}>
            Volume:{" "}
            <span style={{ color: stock.color }}>
              {stock.volume ? <span>{stock.volume}</span> : "Loading..."}
            </span>
          </div>
        </div>
      </Box>
    </a>
  );
}

Stock.propTypes = {
  stock: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  container: {
    margin: "20px",
    textDecoration: "none"
  },

  box_container: {
    display: "flex",
    verticalAlign: "top",
    width: "250px",
    backgroundColor: "white",
    cursor: "pointer"
  },

  box: { padding: "30px 20px 30px 20px", textAlign: "left" },

  title: { color: "black", margin: "0 auto 20px auto" },

  price: {
    fontSize: "18px"
  },

  volume: { fontSize: "12px", marginTop: "10px", color: "black" }
}))(Stock);
