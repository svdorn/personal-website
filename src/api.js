const API_KEY = "weJqvzzJetukXnG6VJYj";

/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
const alpha = require("alphavantage")({ key: API_KEY });

async function getPortfolioStocks() {
  return await alpha.data.batch(["AMZN", "WORK", "BOX"]);
}

export { getPortfolioStocks };
