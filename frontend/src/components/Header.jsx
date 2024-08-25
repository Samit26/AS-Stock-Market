import "./header.css";

const Header = () => {
  return (
    <div className="container header">
      <div className="leftSide">
        <div className="logo"></div>
        <div className="logoName">
          StockMarket.<span>io</span>
        </div>
        <div className="navigation">
          <span className="span1">Dashboard</span>{" "}
          <span className="span1">Portfolio</span>
        </div>
      </div>
      <div className="rightSide"></div>
    </div>
  );
};

export default Header;
