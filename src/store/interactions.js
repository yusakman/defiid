import axios from "axios";
import staticAssets from "../const/static";

export const loadProtocols = async (dispatch) => {
  let protocols;

  const removeCEX = (item) => {
    if (item.category !== "CEX") {
      return item;
    }
  };

  const remove_0_tvl = (item) => {
    if (item.tvl > 1000) {
      return item;
    }
  };

  // Later will udpate with the axios call to the DeFi Illama API
  await axios
    .get(`https://api.llama.fi/protocols`)
    .then((res) => {
      console.log(res.data, "res.data");
      protocols = res.data.filter(removeCEX).filter(remove_0_tvl);
    })
    .catch((error) => console.log(error));

  // protocols = protocols.filter(removeCEX).filter(remove_0_tvl);

  dispatch({
    type: "PROTOCOLS_LOADED",
    protocols,
  });

  return protocols;
};

export const loadCurrency = async (dispatch) => {
  const myAPI = process.env.REACT_APP_EXCHANGE_RATE_API;
  const currencyRate = staticAssets.currencyRate[0].rate
  console.log(currencyRate, 'currency Rate Static')

  let rateUSDtoIDR, currency;
  await axios
    .get(
      `
  https://v6.exchangerate-api.com/v6/${myAPI}/pair/USD/IDR
  `
    )
    .then((res) => {
      rateUSDtoIDR = res.data.conversion_rate;
      currency = rateUSDtoIDR;
    })
    .catch((error) => {
      currency = currencyRate;
      console.log(error);
    });

  dispatch({
    type: "CURRENCY_LOADED",
    currency,
  });

  return rateUSDtoIDR;
};

export const loadYields = async (dispatch) => {
  let yields;

  await axios
    .get(`https://yields.llama.fi/pools`)
    .then((res) => {
      console.log(res.data, "yields data");
      yields = res.data.data;
    })
    .catch((error) => console.log(error));

  dispatch({
    type: "YIELDS_LOADED",
    yields,
  });

  return yields;
};
