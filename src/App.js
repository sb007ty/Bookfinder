import logo from "./logo.svg";
import "./App.css";
import SearchPage from "./components/SearchPage";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationHis from "./components/NavigationHis";

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationHis />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
