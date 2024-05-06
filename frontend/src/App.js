import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    // <Navbar />
    <div className="App">
      <BrowserRouter>
      <Router>
        <Route exact path="/" element={<Create/>}/>
        <Route exact path="/all" element={<Read/>}/>
        <Route exact path="/update" element={<Update/>}/>
      </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
