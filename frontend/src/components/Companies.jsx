import { useEffect } from "react";

const companiesData = [
  {
    name: "Reliance Industries LTD.",
    code: "RELIANCE",
    price: 3007.25,
    percentage: "+0.5%",
  },
  {
    name: "TATA Consultancy Services LTD",
    code: "TCS",
    price: 4496.95,
    percentage: "-0.3%",
  },
  {
    name: "HDFC Bank LTD",
    code: "HDFCBANK",
    price: 1645.95,
    percentage: "+1.05%",
  },
  {
    name: "Bharti Airtel LTD",
    code: "BHARTIARTL",
    price: 1518.05,
    percentage: "-1.23%",
  },
  {
    name: "ICICI Bank LTD",
    code: "ICICIBANK",
    price: 1226.3,
    percentage: "+0.77%",
  },
  {
    name: "Infosys LTD",
    code: "INFY",
    price: 1895.8,
    percentage: "+0.37%",
  },
  {
    name: "STATE BANK OF INDIA",
    code: "SBIN",
    price: 816.45,
    percentage: "+0.23%",
  },
  {
    name: "Hindustan Unilever LTD",
    code: "HINDUNILVR",
    price: 2794.95,
    percentage: "-0.12%",
  },
];

function Companies() {
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
  }, []);

  return (
    <div className="companiesMainContainer">
      <div className="companiesLeftContainer">
        <div className="reliance">
          <div className="name">
            <h1>{companiesData[0].name}</h1>
            {companiesData[0].code}
          </div>
          <div className="price-right">
            {companiesData[0].price}
            <h6>{companiesData[0].percentage}</h6>
          </div>
        </div>
        <div className="tcs">
          <div className="name">
            <h1>{companiesData[1].name}</h1>
            {companiesData[1].code}
          </div>
          <div className="price-right">
            {companiesData[1].price}
            <h6>{companiesData[1].percentage}</h6>
          </div>
        </div>
      </div>
      <div className="companiesRightContainer">
        <div className="row1">
          <div className="hdfcBank">
            <div className="name">
              <h1>{companiesData[2].name}</h1>
              {companiesData[2].code}
            </div>
            <div className="price-right">
              {companiesData[2].price}
              <h6>{companiesData[2].percentage}</h6>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="bhartiAirtel">
            <div className="name">
              <h1>{companiesData[3].name}</h1>
              {companiesData[3].code}
            </div>
            <div className="price-right">
              {companiesData[3].price}
              <h6>{companiesData[3].percentage}</h6>
            </div>
          </div>
          <div className="iciciBank">
            <div className="name">
              <h1>{companiesData[4].name}</h1>
              {companiesData[4].code}
            </div>
            <div className="price-right">
              {companiesData[4].price}
              <h6>{companiesData[4].percentage}</h6>
            </div>
          </div>
        </div>
        <div className="row3">
          <div className="infosys">
            <div className="name">
              <h1>{companiesData[5].name}</h1>
              {companiesData[5].code}
            </div>
            <div className="price-right">
              {companiesData[5].price}
              <h6>{companiesData[5].percentage}</h6>
            </div>
          </div>
          <div className="sbi">
            <div className="name">
              <h1>{companiesData[6].name}</h1>
              {companiesData[6].code}
            </div>
            <div className="price-right">
              {companiesData[6].price}
              <h6>{companiesData[6].percentage}</h6>
            </div>
          </div>
          <div className="hul">
            <div className="name">
              <h1>{companiesData[7].name}</h1>
              {companiesData[7].code}
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
