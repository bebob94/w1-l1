import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/buttonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent
          title="Sono un bottone"
          color1="black"
          color2="white"
        />
      </header>
    </div>
  );
}

export default App;
