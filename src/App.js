import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./components/layout/header";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
