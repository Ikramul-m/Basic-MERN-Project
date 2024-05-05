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
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/all" element={<Show />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
