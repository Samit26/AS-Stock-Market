import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Dashboard from "./pages/Dashboard";
import ApiDataProvider from "./services/ApiServices";

function App() {
  return (
    <ApiDataProvider>
      <div className="container  outer-box">
        <Header />
        {/* <About /> */}
        <Dashboard />
      </div>
    </ApiDataProvider>
  );
}

export default App;
