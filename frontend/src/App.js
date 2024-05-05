import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Show from "./Components/Show";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" elements={<Create />} />
          <Route exact path="/all" elements={<Show />} />
          <Route exact path="/update" elements={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
