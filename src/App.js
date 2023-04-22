import GetStocks from "./components/GetStocks"
import StockChart from "./components/chart"
import SearchBar from "./components/SearchBar"
import "./App.css"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <GetStocks />
      <StockChart />
    </div>
  )
}

export default App
