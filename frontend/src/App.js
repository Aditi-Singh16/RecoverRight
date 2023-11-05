import { React, useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from '../src/Components/Info';
import Home from '../src/Components/Home'; 
import Stats from '../src/Components/Stats';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Components/styles/custom.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import icon from '../src/Components/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [show, setShow] = useState(false);
  return (
    <BrowserRouter>
    <div className="App">
      <div className="header">
        <Container className="header-big">
          <span className='header-big-left'>
            <img src={icon} alt="logo" className="nav-icon" />
          </span>
          <span className="nav-renders">
            <Link to="home" smooth={true} duration={500} className="nav-txt">
              Home
            </Link>
            <Link to="info" smooth={true} duration={500} className="nav-txt">
              Info
            </Link>
            <Link to="stats" smooth={true} duration={500} className="nav-txt">
              Stats
            </Link>
          </span>
        </Container>
        <Container className="header-small">
          <span className="icon-left">
            <img src={icon} alt="buzz-bee" className="nav-icon" />
          </span>
          <span className="icon-right" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} size="xl" />
          </span>
          {show ? (
            <center>
              <br />
              <Link to="home" smooth={true} duration={500} className="nav-txt">
                Home
              </Link>
              <Link to="info" smooth={true} duration={500} className="nav-txt">
                Info
              </Link>
              <Link to="stats" smooth={true} duration={500} className="nav-txt">
                Stats
              </Link>
            </center>
          ) : null}
        </Container>
      </div>
      <Routes>
        <Route path="/" element={[<Home name="home" />, <Info name="info" />, <Stats name="stats" />]} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
