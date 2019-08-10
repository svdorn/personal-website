const API_KEY = "weJqvzzJetukXnG6VJYj";

/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */
const alpha = require("alphavantage")({ key: API_KEY });

function getData(data) {
  let arr = [];
  let newData = [];
  for (let i in data) {
    if (i.toString() !== "Meta Data") {
      for (let j in data[i]) {
        if (j !== undefined) {
          arr.push({ name: j, Price: parseFloat(data[i][j]["1. open"]) });
        }
      }
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    newData.push(arr[i]);
  }

  return newData;
}

function formatIntradayDate(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let am_pm = "am";

  if (hour === 12) {
    am_pm = "pm";
  } else if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
    am_pm = "pm";
  }

  let mins = minutes.toString();
  if (mins.length < 2) {
    mins = "0" + mins;
  }

  return hour.toString() + ":" + mins + am_pm;
}

async function getDJIA() {
  const response = await alpha.data.daily("DJIA", 1);

  return response;
}

async function getPortfolioStocks() {
  const response = await alpha.data.batch(["AMZN", "GOOGL", "AAPL", "BOX"]);

  return response;
}

async function getFeaturedStocks() {
  const response = await alpha.data.batch(["GILD", "AAPL", "SWKS"]);

  return response;
}

async function getStock(ticker) {
  const intraday = await getIntraday(ticker);
  const daily = null;

  return { intraday, daily };
}

async function getIntraday(ticker) {
  let intraday = await alpha.data.intraday(ticker, "compact", "json", "5min");

  const today = new Date();
  let date = today.getDate();
  if (today.getDay() === 0) {
    date -= 2;
  } else if (today.getDay() === 6) {
    date -= 1;
  }
  let intra = [];
  intraday = getData(intraday);
  let lowDomain = Infinity;
  let highDomain = 0;
  for (let i = 0; i < intraday.length; i++) {
    const day = new Date(intraday[i].name);
    if (day.getDate() === date) {
      if (intraday[i].Price < lowDomain) {
        lowDomain = Math.floor(intraday[i].Price);
      }
      if (intraday[i].Price > highDomain) {
        highDomain = Math.ceil(intraday[i].Price);
      }
      intraday[i].name = formatIntradayDate(day);
      intra.push(intraday[i]);
    }
  }

  return { intraday: intra, lowDomain, highDomain };
}

async function getDaily(ticker) {
  const daily = await alpha.data.daily(ticker);

  return daily;
}

async function getMonthly(ticker) {
  const monthly = await alpha.data.monthly(ticker);

  return monthly;
}

async function getSma(ticker) {
  const sma = await alpha.technical.sma(ticker, "daily", 60, "close");

  return sma;
}

async function getWma(ticker) {
  const wma = await alpha.technical.wma(ticker, "daily", 60, "close");

  return wma;
}

async function search(keywords) {
  const stocks = await alpha.data.search(keywords);

  return stocks;
}

export {
  getDJIA,
  getFeaturedStocks,
  getPortfolioStocks,
  getIntraday,
  getDaily,
  getMonthly,
  getSma,
  getWma,
  getStock,
  search
};
