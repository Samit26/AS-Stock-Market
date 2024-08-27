import "./leftdashboard.css";
import { useContext, useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { ApiData } from "../services/ApiServices";

const Leftdashboard = () => {
  const firstChartContainerRef = useRef(null);

  const {
    chartData,
    setTimeframe,
    difference,
    differencePercentage,
    marketOpenPriceX,
    latestPrice,
  } = useContext(ApiData);

  useEffect(() => {
    if (firstChartContainerRef.current) {
      const chartOptions = {
        width: 667,
        height: 220,
        layout: {
          textColor: "black",
          background: { type: "solid", color: "white" },
        },
      };
      const chart = createChart(firstChartContainerRef.current, chartOptions);

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });

      candlestickSeries.setData(chartData);

      chart.timeScale().fitContent();

      return () => {
        chart.remove();
      };
    }
  }, [chartData]);

  return (
    <>
      <div className="dash">Dashboard</div>
      <div className="stock-name">Canara Bank</div>
      <div className="container1">
        <div className="price-container">
          <div className="price">
            <FaRupeeSign className="moneyIcon" />
            <span className="text">{Math.floor(latestPrice)}</span>
            <span className="span3">{marketOpenPriceX}</span>
          </div>
          <span className="price-difference-percentage ">
            <MdOutlineKeyboardDoubleArrowUp />
            {differencePercentage + "%"}
          </span>
          <span className="price-difference-money">
            <FaRupeeSign className="moneyIcon" />
            {difference}
          </span>
        </div>
        <div className="time-span">
          <select
            name="Time"
            className="select-time"
            defaultValue="day"
            onChange={(event) => {
              setTimeframe(event.target.value);
            }}
          >
            <option value="1minute">1min</option>
            <option value="30minute">30min</option>
            <option value="day">Daily</option>
            <option value="week">Weekly</option>
            <option value="month">Monthly</option>
          </select>
        </div>
      </div>
      <div
        ref={firstChartContainerRef}
        style={{ width: "667px", height: "220px" }}
      ></div>
    </>
  );
};

export default Leftdashboard;
