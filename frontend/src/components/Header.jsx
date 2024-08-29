import "./header.css";
import { BsStars } from "react-icons/bs";
import { FaBell } from "react-icons/fa";

const Header = ({ selectedTab, handleOnClick }) => {
  return (
    <div className="container header">
      <div className="leftSide">
        <div className="logo"></div>
        <div className="logoName">
          StockMarket.<span>io</span>
        </div>
        <div className="navigation">
          <span
            className={`navOption ${selectedTab === "Dashboard" && "active"}`}
            onClick={() => handleOnClick("Dashboard")}
          >
            Dashboard
          </span>
          <span
            className={`navOption ${selectedTab === "About" && "active"}`}
            onClick={() => handleOnClick("About")}
          >
            Behind the Code || Code & Crew
          </span>
        </div>
      </div>
      <div className="rightSide">
        <div className="generativeAi">
          Generate <BsStars />
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
