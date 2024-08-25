import "./header.css";
import { BsStars } from "react-icons/bs";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container header">
      <div className="leftSide">
        <div className="logo"></div>
        <div className="logoName">
          StockMarket.<span>io</span>
        </div>
        <div className="navigation">
          <span className="span1">Dashboard</span>
          <span className="span1">Portfolio</span>
        </div>
      </div>
      <div className="rightSide">
        <div className="navigation">
          <span className="span1">Saved</span>
          <span className="span2">
            Generate <BsStars />
          </span>
        </div>
        <div className="profile">
          <div className="bell-icon">
            <FaBell />
          </div>
          <div className="line"></div>
          <div className="profile-pic"></div>
          <div className="profile-name">Samit Khedekar</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
