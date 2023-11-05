import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Info from '../src/Components/info';
import Home from '../src/Components/home'; 
import Stats from '../src/Components/stats';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Components/styling/custom.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
