import { createContext, useEffect, useReducer, useState } from "react";
// writing some huge comments
export const ApiData = createContext();

const dataReducer = (chartData, action) => {
  switch (action.type) {
    case "SET_DATA":
      return [...chartData, action.payload];
    case "CLEAR_DATA":
      return (chartData = []);
    default:
      return chartData;
  }
};

// eslint-disable-next-line react/prop-types
const ApiDataProvider = ({ children }) => {
  const initialData = [];
  const [difference, setDifference] = useState(null);
  const [differencePercentage, setDifferencePercentage] = useState(null);
  const [chartData, dispatch] = useReducer(dataReducer, initialData);
  const [timeframe, setTimeframe] = useState("day");
  const [toDate, setToDate] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [marketOpenPrice, setMarketOpenPrice] = useState(null);
  const [marketOpenPriceX, setMarketOpenPriceX] = useState(null);
  const [latestPrice, setLatestPrice] = useState(null);
  const [stockChange, setStockChange] = useState("NSE_EQ|INE476A01022");
  const [stockName, setStockName] = useState("Canara Bank");
  // const [stockReturns, setStockReturns] = useState({
  //   month: null,
  //   threeMonth: null,
  //   year: null,
  // });

  useEffect(() => {
    if (marketOpenPrice != null && latestPrice != null) {
      const diff = latestPrice - marketOpenPrice;
      const diff2 = diff.toFixed(2);
      setDifference(diff2);
      const diffPer = (diff / marketOpenPrice) * 100;
      const diffPer2 = diffPer.toFixed(2);
      setDifferencePercentage(diffPer2);
    }
  }, [marketOpenPrice, latestPrice]);
  useEffect(() => {
    if (timeframe === "day") {
      const yesterday = () => {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        return d;
      };

      const from = () => {
        let d = new Date();
        d.setDate(d.getDate() - 25);
        return d;
      };
      setFromDate(from().toISOString().split("T")[0]);
      setToDate(yesterday().toISOString().split("T")[0]);
    }
    if (timeframe === "week") {
      const yesterday = () => {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        return d;
      };

      const from = () => {
        let d = new Date();
        d.setDate(d.getDate() - 120);
        return d;
      };
      setFromDate(from().toISOString().split("T")[0]);
      setToDate(yesterday().toISOString().split("T")[0]);
    }
    if (timeframe === "month") {
      const yesterday = () => {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        return d;
      };

      const from = () => {
        let d = new Date();
        d.setDate(d.getDate() - 365);
        return d;
      };
      setFromDate(from().toISOString().split("T")[0]);
      setToDate(yesterday().toISOString().split("T")[0]);
    }
    if (timeframe === "30minute") {
      const yesterday = () => {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        return d;
      };

      const from = () => {
        let d = new Date();
        d.setDate(d.getDate() - 4);
        return d;
      };
      setFromDate(from().toISOString().split("T")[0]);
      setToDate(yesterday().toISOString().split("T")[0]);
    }

    if (timeframe === "1minute") {
      const yesterday = () => {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        return d;
      };

      const from = () => {
        let d = new Date();
        d.setDate(d.getDate() - 2);
        return d;
      };
      setFromDate(from().toISOString().split("T")[0]);
      setToDate(yesterday().toISOString().split("T")[0]);
    }
  }, [timeframe]);
  useEffect(() => {
    const yesterday = () => {
      let d = new Date();
      d.setDate(d.getDate() - 1);
      return d;
    };

    const from = () => {
      let d = new Date();
      d.setDate(d.getDate() - 2);
      return d;
    };
    const f = from().toISOString().split("T")[0];
    const y = yesterday().toISOString().split("T")[0];
    fetch(
      `https://api.upstox.com/v2/historical-candle/${stockChange}/${timeframe}/${y}/${f}`
    )
      .then((res) => res.json())
      .then((data1) => {
        const data2 = data1.data.candles;
        const data3 = data2.sort((a, b) => new Date(a[0]) - new Date(b[0]));
        let i = data3.length - 1;
        const data4 = data3[i][4];
        // console.log(data4);
        setMarketOpenPrice(data4);
      });
  }, [stockChange, marketOpenPrice, latestPrice]);

  // useEffect(() => {
  //   if (stockReturns.month === null) {
  //     const yesterday = () => {
  //       let d = new Date();
  //       d.setDate(d.getDate() - 1);
  //       return d;
  //     };
  //     const y = yesterday().toISOString().split("T")[0];
  //     const fromMonth = () => {
  //       let d = new Date();
  //       d.setDate(d.getDate() - 30);
  //       return d;
  //     };
  //     const fm = fromMonth().toISOString().split("T")[0];

  //     fetch(
  //       `https://api.upstox.com/v2/historical-candle/${stockChange}/day/${y}/${fm}`
  //     )
  //       .then((res) => res.json())
  //       .then((data1) => {
  //         const data2 = data1.data.candles;
  //         const data3 = data2.sort((a, b) => new Date(a[0]) - new Date(b[0]));

  //         const data4 = data3[0][4];
  //         // console.log(
  //         //   `from date: ${fm}, 1 month  before close price: ${data4}, latest price : ${latestPrice}`
  //         // );
  //         const data5 = ((latestPrice - data4) / data4) * 100;
  //         setStockReturns({ ...stockReturns, month: `${data5.toFixed(2)}` });
  //       });
  //   }
  // }, [stockChange, latestPrice]);

  // useEffect(() => {
  //   if (stockReturns.threeMonth === null) {
  //     const yesterday = () => {
  //       let d = new Date();
  //       d.setDate(d.getDate() - 1);
  //       return d;
  //     };
  //     const y = yesterday().toISOString().split("T")[0];
  //     const fromThreeMonth = () => {
  //       let d = new Date();
  //       d.setDate(d.getDate() - 185);
  //       return d;
  //     };
  //     const ftm = fromThreeMonth().toISOString().split("T")[0];

  //     fetch(
  //       `https://api.upstox.com/v2/historical-candle/${stockChange}/week/${y}/${ftm}`
  //     )
  //       .then((res) => res.json())
  //       .then((data1) => {
  //         const data2 = data1.data.candles;
  //         const data3 = data2.sort((a, b) => new Date(a[0]) - new Date(b[0]));

  //         const data4 = data3[0][4];
  //         // console.log(
  //         //   `from date: ${fm}, 1 month  before close price: ${data4}, latest price : ${latestPrice}`
  //         // );
  //         const data5 = ((latestPrice - data4) / data4) * 100;
  //         setStockReturns({
  //           ...stockReturns,
  //           threeMonth: `${data5.toFixed(2)}`,
  //         });
  //       });
  //   }
  // }, [stockChange, latestPrice]);

  // useEffect(() => {
  //   if (stockReturns.year === null) {
  //     const yesterday = () => {
  //       let d = new Date();
  //       d.setDate(d.getDate() - 1);
  //       return d;
  //     };
  //     const y = yesterday().toISOString().split("T")[0];
  //     const fromYear = () => {
  //       let d = new Date();
  //       d.setDate(d.getDate() - 365);
  //       return d;
  //     };
  //     const fy = fromYear().toISOString().split("T")[0];

  //     fetch(
  //       `https://api.upstox.com/v2/historical-candle/${stockChange}/month/${y}/${fy}`
  //     )
  //       .then((res) => res.json())
  //       .then((data1) => {
  //         const data2 = data1.data.candles;
  //         const data3 = data2.sort((a, b) => new Date(a[0]) - new Date(b[0]));

  //         const data4 = data3[0][4];
  //         console.log(
  //           `from date: ${fy}, 12 month  before close price: ${data4}, latest price : ${latestPrice}`
  //         );
  //         const data5 = ((latestPrice - data4) / data4) * 100;
  //         setStockReturns({ ...stockReturns, year: `${data5.toFixed(2)}` });
  //       });
  //   }
  // }, [stockChange, latestPrice]);

  useEffect(() => {
    fetch(
      `https://api.upstox.com/v2/historical-candle/intraday/${stockChange}/1minute`
    )
      .then((res) => res.json())
      .then((data1) => {
        const data2 = data1.data.candles;
        const data3 = data2.sort((a, b) => new Date(a[0]) - new Date(b[0]));
        let i = data3.length - 1;
        const data4 = data3[i][4];

        const decimal = data4 % 1;
        const decimalS = decimal.toFixed(2).substring(1);
        setMarketOpenPriceX(decimalS);
        setLatestPrice(data4);
      });
  }, [stockChange, latestPrice]);

  // setInterval(() => {
  //   fetch(
  //     `https://api.upstox.com/v2/historical-candle/intraday/${stockChange}/1minute`
  //   )
  //     .then((res) => res.json())
  //     .then((data1) => {
  //       const data2 = data1.data.candles;
  //       const data3 = data2.sort((a, b) => new Date(a[0]) - new Date(b[0]));
  //       let i = data3.length - 1;
  //       const data4 = data3[i][4];
  //       const decimal = data4 % 1;
  //       const decimalS = decimal.toFixed(2).substring(1);
  //       setMarketOpenPriceX(decimalS);
  //       setLatestPrice(Math.floor(data4));
  //     });
  // }, 6000);

  useEffect(() => {
    if (
      initialData.length === 0 &&
      toDate != null &&
      timeframe != "1minute" &&
      timeframe != "30minute"
    ) {
      fetch(
        `https://api.upstox.com/v2/historical-candle/${stockChange}/${timeframe}/${toDate}/${fromDate}`
      )
        .then((res) => res.json())
        .then((data1) => {
          const data2 = data1.data.candles;

          const data3 = data2.sort((a, b) => new Date(a[0]) - new Date(b[0]));

          const data4 = data3.map((item) => {
            const date = new Date(item[0]);
            const seconds = Math.floor(date.getTime() / 1000);
            return {
              time: seconds,
              open: item[1],
              high: item[2],
              low: item[3],
              close: item[4],
            };
          });

          dispatch({
            type: "CLEAR_DATA",
          });

          data4.forEach((dataPoint) => {
            dispatch({
              type: "SET_DATA",
              payload: dataPoint,
            });
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else if (timeframe === "1minute" || timeframe === "30minute") {
      fetch(
        `https://api.upstox.com/v2/historical-candle/intraday/${stockChange}/${timeframe}`
      )
        .then((res) => res.json())
        .then((data1) => {
          const data2 = data1.data.candles;

          const data3 = data2.sort((a, b) => new Date(a[0]) - new Date(b[0]));

          const data4 = data3.map((item) => {
            const date = new Date(item[0]);
            const seconds = Math.floor(date.getTime() / 1000);
            return {
              time: seconds,
              open: item[1],
              high: item[2],
              low: item[3],
              close: item[4],
            };
          });

          dispatch({
            type: "CLEAR_DATA",
          });

          data4.forEach((dataPoint) => {
            dispatch({
              type: "SET_DATA",
              payload: dataPoint,
            });
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData.length, toDate, fromDate, stockChange]);

  return (
    <ApiData.Provider
      value={{
        chartData,
        setTimeframe,
        marketOpenPrice,
        marketOpenPriceX,
        latestPrice,
        difference,
        differencePercentage,
        setStockChange,
        setStockName,
        stockName,
        // stockReturns,
      }}
    >
      {children}
    </ApiData.Provider>
  );
};

export default ApiDataProvider;
