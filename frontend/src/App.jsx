import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import ApiDataProvider from "./services/ApiServices";

// #update
function App() {
  return (
    <ApiDataProvider>
      <div className="container  outer-box">
        <Header />

        <Dashboard />
      </div>
    </ApiDataProvider>
  );
}

export default App;
