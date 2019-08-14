import React from "react";
import PropTypes from "prop-types";
import Stock from "./Stock";
import { numberWithCommas } from "../../miscFunctions";
import { css, withStyles } from "../../withStyles";

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

function StocksList({ stocks, styles }) {
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
    <div>
      <div {...css(styles.container)}>
        {stocksList.map(stock => (
          <Stock key={stock.ticker} stock={stock} />
        ))}
      </div>
    </div>
  );
}

StocksList.propTypes = {
  stocks: PropTypes.array.isRequired,
  styles: PropTypes.object.isRequired
};

export default withStyles(() => ({
  container: {
    display: "inline-flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  }
}))(StocksList);
