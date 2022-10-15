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
      <footer className="App-footer mt-4">
      This project was coded by Olga Zivenko and is {" "}  
        <a
          className="App-link"
          href="https://github.com/Olga-Zivenko/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
            open-sourced on GitHub {""}</a>{""}
            and {""}
            <a
          className="App-link"
          href="https://sage-faun-d39d35.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
            hosted on Netlify</a>
        
        </footer>
    </div>
    </div>
  );
}


