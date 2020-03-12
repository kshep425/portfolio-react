import React from 'react';
import logo from './logo-kds.svg';
import './App.css';
import NavbarDiv from './Navbar';
import Resume from './Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './Portfolio';

/**
 * @returns {div} main div for portfolio
 */
function App() {
  return (
    <div className="App">
      <NavbarDiv />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='welcome'>
          Welcome to KDS Dream Tech
        </p>
      </header>
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;
