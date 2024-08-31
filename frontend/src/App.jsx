import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Dashboard from "./pages/Dashboard";
import ApiDataProvider from "./services/ApiServices";
import { useState } from "react";

// #update
function App() {
  const [tab, setTab] = useState("Dashboard");

  return (
    <ApiDataProvider>
      <div className="container  outer-box">
        <Header selectedTab={tab} handleOnClick={setTab} />
        {tab === "Dashboard" ? <Dashboard /> : <About />}
        {/* <About /> */}
        {/* <Dashboard /> */}
      </div>
    </ApiDataProvider>
  );
}

export default App;
