import "./App.css";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Show from "./Components/Show";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route exact path="/" elements={<Create />} />
          <Route exact path="/all" elements={<Show />} />
          <Route exact path="/update" elements={<Update />} />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
