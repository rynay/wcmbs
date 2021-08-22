import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
