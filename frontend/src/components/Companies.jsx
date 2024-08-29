import { useContext, useEffect, useState } from "react";
import { ApiData } from "../services/ApiServices";

function Companies() {
  const [companiesData, setCompaniesData] = useState([
    {
      name: "Reliance Industries LTD.",
      code: "NSE_EQ|INE002A01018",
      stockCode: "RELIANCE",
      price: null,
      percentage: null,
    },
    {
      name: "TATA Consultancy Services LTD",
      code: "NSE_EQ|INE467B01029",
      stockCode: "TCS",
      price: null,
      percentage: null,
    },
    {
      name: "HDFC Bank LTD",
      code: "NSE_EQ|INE040A01034",
      stockCode: "HDFCBANK",
      price: null,
      percentage: null,
    },
    {
      name: "Bharti Airtel LTD",
      code: "NSE_EQ|INE397D01024",
      stockCode: "BHARTIARTL",
      price: null,
      percentage: null,
    },
    {
      name: "ICICI Bank LTD",
      code: "NSE_EQ|INE090A01021",
      stockCode: "ICICIBANK",
      price: null,
      percentage: null,
    },
    {
      name: "Infosys LTD",
      code: "NSE_EQ|INE009A01021",
      stockCode: "INFY",
      price: null,
      percentage: null,
    },
    {
      name: "STATE BANK OF INDIA",
      code: "NSE_EQ|INE062A01020",
      stockCode: "SBIN",
      price: null,
      percentage: null,
    },
    {
      name: "Hindustan Unilever LTD",
      code: "NSE_EQ|INE030A01027",
      stockCode: "HINDUNILVR",
      price: null,
      percentage: null,
    },
    {
      name: "Canara Bank LTD",
      code: "NSE_EQ|INE476A01022",
      stockCode: "CANBK",
      price: null,
      percentage: null,
    },
  ]);
  const { setStockChange, setStockName } = useContext(ApiData);

  useEffect(() => {
    const priceElements = document.querySelectorAll(".price-right h6");
    priceElements.forEach((element) => {
      const price = parseFloat(element.textContent);
      if (price > 0) {
        element.style.color = "green";
      } else if (price < 0) {
        element.style.color = "red";
      }
    });
  }, [companiesData]);

  useEffect(() => {
    const updateStockPrices = async () => {
      const updatedData = await Promise.all(
        companiesData.map(async (data5) => {
          try {
            const response = await fetch(
              `https://api.upstox.com/v2/historical-candle/intraday/${data5.code}/1minute`
            );
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data1 = await response.json();
            const data2 = data1.data.candles;
            const data3 = data2.sort((a, b) => new Date(a[0]) - new Date(b[0]));
            const latestPrice = data3[data3.length - 1][4];
            return { ...data5, price: latestPrice };
          } catch (error) {
            console.error("Error fetching data:", error);
            return data5;
          }
        })
      );
      setCompaniesData(updatedData);
    };

    updateStockPrices();
  }, []);

  useEffect(() => {
    const updateStockPercentages = async () => {
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
      const updatedData = await Promise.all(
        companiesData.map(async (data5) => {
          if (data5.percentage === null) {
            try {
              const response = await fetch(
                `https://api.upstox.com/v2/historical-candle/${data5.code}/day/${y}/${f}`
              );
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              const data1 = await response.json();
              const data2 = data1.data.candles;
              const data3 = data2.sort(
                (a, b) => new Date(a[0]) - new Date(b[0])
              );
              let i = data3.length - 1;
              const data4 = data3[i][4];
              const diff = data5.price - data4;
              const diffPer = (diff / data4) * 100;
              const diffPer2 = diffPer.toFixed(2);
              return { ...data5, percentage: diffPer2 + "%" };
            } catch (error) {
              console.error("Error fetching data:", error);
              return data5;
            }
          }
          return data5;
        })
      );
      setCompaniesData(updatedData);
    };

    updateStockPercentages();
  }, [companiesData]);
  return (
    <div className="companiesMainContainer">
      <div className="companiesLeftContainer">
        <div
          className="reliance"
          onClick={() => {
            setStockChange(companiesData[0].code);
            setStockName(companiesData[0].name);
          }}
        >
          <div className="name">
            <h1>{companiesData[0].name}</h1>
            {companiesData[0].stockCode}
          </div>
          <div className="price-right">
            {companiesData[0].price}
            <h6>{companiesData[0].percentage}</h6>
          </div>
        </div>
        <div
          className="tcs"
          onClick={() => {
            setStockChange(companiesData[1].code);
            setStockName(companiesData[1].name);
          }}
        >
          <div className="name">
            <h1>{companiesData[1].name}</h1>
            {companiesData[1].stockCode}
          </div>
          <div className="price-right">
            {companiesData[1].price}
            <h6>{companiesData[1].percentage}</h6>
          </div>
        </div>
      </div>
      <div className="companiesRightContainer">
        <div className="row1">
          <div
            className="hdfcBank"
            onClick={() => {
              setStockChange(companiesData[2].code);
              setStockName(companiesData[2].name);
            }}
          >
            <div className="name">
              <h1>{companiesData[2].name}</h1>
              {companiesData[2].stockCode}
            </div>
            <div className="price-right">
              {companiesData[2].price}
              <h6>{companiesData[2].percentage}</h6>
            </div>
          </div>
        </div>
        <div className="row2">
          <div
            className="bhartiAirtel"
            onClick={() => {
              setStockChange(companiesData[3].code);
              setStockName(companiesData[3].name);
            }}
          >
            <div className="name">
              <h1>{companiesData[3].name}</h1>
              {companiesData[3].stockCode}
            </div>
            <div className="price-right">
              {companiesData[3].price}
              <h6>{companiesData[3].percentage}</h6>
            </div>
          </div>
          <div
            className="iciciBank"
            onClick={() => {
              setStockChange(companiesData[4].code);
              setStockName(companiesData[4].name);
            }}
          >
            <div className="name">
              <h1>{companiesData[4].name}</h1>
              {companiesData[4].stockCode}
            </div>
            <div className="price-right">
              {companiesData[4].price}
              <h6>{companiesData[4].percentage}</h6>
            </div>
          </div>
        </div>
        <div className="row3">
          <div
            className="infosys"
            onClick={() => {
              setStockChange(companiesData[5].code);
              setStockName(companiesData[5].name);
            }}
          >
            <div className="name">
              <h1>{companiesData[5].name}</h1>
              {companiesData[5].stockCode}
            </div>
            <div className="price-right">
              {companiesData[5].price}
              <h6>{companiesData[5].percentage}</h6>
            </div>
          </div>
          <div className="sbi">
            <div
              className="name"
              onClick={() => {
                setStockChange(companiesData[6].code);
                setStockName(companiesData[6].name);
              }}
            >
              <h1>{companiesData[6].name}</h1>
              {companiesData[6].stockCode}
            </div>
            <div className="price-right">
              {companiesData[6].price}
              <h6>{companiesData[6].percentage}</h6>
            </div>
          </div>
          <div
            className="hul"
            onClick={() => {
              setStockChange(companiesData[7].code);
              setStockName(companiesData[7].name);
            }}
          >
            <div className="name">
              <h1>{companiesData[7].name}</h1>
              {companiesData[7].stockCode}
            </div>
            <div className="price-right">
              {companiesData[7].price}
              <h6>{companiesData[7].percentage}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies;
