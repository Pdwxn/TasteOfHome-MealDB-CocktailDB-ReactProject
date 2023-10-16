import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <navbar>
          <span>Home</span>
          <span>Recipes</span>
          <span>Contact</span>
        </navbar>
      </header>
    </div>
  );
}

export default App;
