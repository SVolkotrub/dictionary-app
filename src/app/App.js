import logo from "../images/Book_Lover.png";
import './App.css';
import Dictionary from "../Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
          <h1 className="header"> Dictionary  </h1>
        </header>
        <main className="container main">
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by <a href="https://portfolio-volkotrub.netlify.app/" target="_blank" rel="noreferrer noopener">Svitlana Volkotrub</a>, <a href="https://github.com/SVolkotrub/dictionary-app" rel="noreferrer noopener" target="_blank">open-source</a> project</footer>
      </div>
    </div>
  );
}

export default App;
