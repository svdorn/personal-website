import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";

import "./stocks.css";

function Stock({ stock }) {
  return (
    <a
      href={`https://finance.yahoo.com/quote/${stock.ticker}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Box
        placement={stock.placement}
        color={stock.color}
        className="collapse-box"
      >
        <div className="box">
          <h3 style={{ color: "black" }}>{stock.name}</h3>
          <div style={{ color: stock.color }}>
            {stock.ticker}
            <br />
            <b className="price">
              {stock.price ? <span>{stock.price}</span> : "$$$..."}
            </b>
          </div>
          <div className="volume">
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
  stock: PropTypes.object.isRequired
};

export default Stock;
