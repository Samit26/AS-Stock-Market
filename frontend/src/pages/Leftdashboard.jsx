import "./leftdashboard.css";
import { FaRupeeSign } from "react-icons/fa";
const Leftdashboard = () => {
  return (
    <>
      <div className="dash">Dashboard</div>
      <div className="stock-name">Relience Group</div>
      <div className="container1">
        <div className="price-container">
          <div className="price">
            <FaRupeeSign className="moneyIcon" />
            <span className="text">64,314.</span>
            <span className="span3">74</span>
          </div>
          <span className="price-difference-percentage ">17.3%</span>
          <span className="price-difference-money">
            <FaRupeeSign lassName="moneyIcon" />
            300
          </span>
        </div>
        <div className="time-span"></div>
      </div>
    </>
  );
};

export default Leftdashboard;
