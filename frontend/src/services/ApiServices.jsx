import { createContext, useEffect, useReducer, useState } from "react";

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

  const [chartData, dispatch] = useReducer(dataReducer, initialData);
  const [timeframe, setTimeframe] = useState("day");
  const [toDate, setToDate] = useState(null);
  const [fromDate, setFromDate] = useState(null);
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
    if (
      initialData.length === 0 &&
      toDate != null &&
      timeframe != "1minute" &&
      timeframe != "30minute"
    ) {
      fetch(
        `https://api.upstox.com/v2/historical-candle/NSE_EQ|INE476A01022/${timeframe}/${toDate}/${fromDate}`
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
        `https://api.upstox.com/v2/historical-candle/intraday/NSE_EQ|INE476A01022/${timeframe}`
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
  }, [initialData.length, toDate, fromDate]);

  return (
    <ApiData.Provider value={{ chartData, setTimeframe }}>
      {children}
    </ApiData.Provider>
  );
};

export default ApiDataProvider;
