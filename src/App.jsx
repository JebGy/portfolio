import { useState } from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import "./styles/index.css";
import About from "./components/About";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div className="app">
      <Menu setCurrentPage={setCurrentPage} />
      {
        {
          Home: <Home currentPage={currentPage} />,
          About: <About currentPage={currentPage} />,
        }[currentPage]
      }
    </div>
  );
}

export default App;
