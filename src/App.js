import Navbar from "./components/Navbar";
import "./styles/style.css";
import { Router } from "@reach/router";
import StockList from "./components/StockList";
import Dashboard from "./components/Dashboard";
import StockTable from "./components/StockTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router className="router">
        <Dashboard path="dashboard" />
        <StockList path="stock" />
        <StockTable path="table" />
      </Router>
    </div>
  );
}

export default App;
