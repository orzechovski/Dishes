import MainContent from "./MainContent";
import Navigation from "./Navigation";
import { HashRouter as Router } from "react-router-dom";
import "../styles/App.css";

function App() {
  return (
    <Router baseline="/">
      <div className="app">
        <nav>
          <h5>Dishes-app</h5>
          <Navigation />
        </nav>
        <main>
          <MainContent />
        </main>
      </div>
    </Router>
  );
}

export default App;
