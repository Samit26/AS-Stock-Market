import { createContext, useEffect, useReducer } from "react";

export const ApiData = createContext();

const dataReducer = (chartData, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [...chartData, action.payload];
    case "UPDATE_DATA":
      return chartData.map((data) =>
        data.time === action.payload.time ? action.payload : data
      );
    default:
      return chartData;
  }
};

// eslint-disable-next-line react/prop-types
const ApiDataProvider = ({ children }) => {
  const initialData = [
    {
      time: "2024-08-01",
      open: 3015.4,
      high: 3022.65,
      low: 2996.2,
      close: 2999.95,
    },
    {
      time: "2024-08-02",
      open: 3001.3,
      high: 3011.8,
      low: 2981.35,
      close: 2995.1,
    },
    {
      time: "2024-08-03",
      open: 2986.25,
      high: 3007.65,
      low: 2981,
      close: 2993.35,
    },
    // {
    //   time: "2024-08-04",
    //   open: 2967.45,
    //   high: 2996.35,
    //   low: 2963,
    //   close: 2977.2,
    // },
    {
      time: "2024-08-05",
      open: 2933.35,
      high: 2961,
      low: 2916.65,
      close: 2956.15,
    },
    {
      time: "2024-08-06",
      open: 2926.5,
      high: 2943.4,
      low: 2908,
      close: 2922.65,
    },
    {
      time: "2024-08-07",
      open: 2925,
      high: 2939.9,
      low: 2915.6,
      close: 2926.9,
    },
    {
      time: "2024-08-08",
      open: 2932.4,
      high: 2946,
      low: 2916.2,
      close: 2921.5,
    },
    {
      time: "2024-08-09",
      open: 2927.7,
      high: 2954.05,
      low: 2912.05,
      close: 2948.3,
    },
    {
      time: "2024-08-10",
      open: 2923,
      high: 2927.2,
      low: 2892.25,
      close: 2895.5,
    },
    {
      time: "2024-08-11",
      open: 2945.75,
      high: 2946.1,
      low: 2923,
      close: 2929.2,
    },
    {
      time: "2024-08-12",
      open: 2901.15,
      high: 2955.35,
      low: 2901.15,
      close: 2911.8,
    },
    {
      time: "2024-08-13",
      open: 2950.05,
      high: 2960.1,
      low: 2865.8,
      close: 2894.7,
    },
    {
      time: "2024-08-21",
      open: 2985,
      high: 3015.85,
      low: 2980,
      close: 2996.55,
    },
  ];

  const [chartData, dispatch] = useReducer(dataReducer, initialData);

  useEffect(() => {
    fetch(
      "https://api.upstox.com/v2/historical-candle/NSE_EQ|INE476A01022/day/2024-08-25/2024-08-15"
    )
      .then((res) => res.json())
      .then((data1) => {
        const data2 = data1.data.candles;
        console.log(data2.reverse());
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const value = 10;
  return (
    <ApiData.Provider value={{ value, chartData }}>{children}</ApiData.Provider>
  );
};

export default ApiDataProvider;
