import React from "react";
import PropTypes from "prop-types";
import Stock from "./Stock";
import { numberWithCommas } from "../../miscFunctions";

import "./stocks.css";

const stocksList = [
  {
    color: "#f46a54",
    placement: "left",
    name: "Amazon",
    ticker: "AMZN"
  },
  {
    color: "#f46a54",
    placement: "center",
    name: "Slack",
    ticker: "WORK"
  },
  {
    color: "#f46a54",
    placement: "right",
    name: "Box",
    ticker: "BOX"
  }
];

function StocksList({ stocks }) {
  for (let i = 0; i < stocks.length; i++) {
    let stock = stocks[i];
    const found = stocksList.find(
      st => st.ticker.toString() === stock["1. symbol"].toString()
    );

    if (found) {
      found.price = "$" + parseFloat(stock["2. price"]).toFixed(2);
      found.volume = numberWithCommas(stock["3. volume"]);
    }
  }

  return (
    <div className="featured-stocks-list">
      <div>
        {stocksList.map(stock => (
          <Stock key={stock.ticker} stock={stock} />
        ))}
      </div>
    </div>
  );
}

StocksList.propTypes = {
  stocks: PropTypes.array.isRequired
};

export default StocksList;
