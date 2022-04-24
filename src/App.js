import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter as Router } from "react-router-dom";
import _ from "lodash";
import Header from "./components/layout/header";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";

function App() {
  return (
    <Router>
      <div className="App bg-image">
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
