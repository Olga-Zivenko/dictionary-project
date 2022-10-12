import logo from "./logo.png"
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo}  alt="logo" className="App-logo img-fluid" />
       
      </header>
      <small>
        <Dictionary />
      </small>
      <footer className="App-footer mt-4">Coded by SheCodes</footer>
    </div>
    </div>
  );
}


