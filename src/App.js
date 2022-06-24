import logo from "./images/Book_Lover.png";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        <img src={logo} alt="logo" className="App-logo img-fluid" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Svitlana Volkotrub</footer>
      </div>
    </div>
  );
}

export default App;
