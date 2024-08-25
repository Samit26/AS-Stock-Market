import "./dashboard.css";
import Leftdashboard from "./Leftdashboard";
import Rightdashboard from "./Rightdashboard";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left-dashboard">
        <Leftdashboard />
      </div>
      <div className="right-dashboard">
        <Rightdashboard />
      </div>
    </div>
  );
};

export default Dashboard;
