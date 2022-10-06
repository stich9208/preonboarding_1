import ReactDOM from "react-dom/client";
import Router from "./Router";
import Route from "./Route";
import Root from "./Root";
import About from "./About";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
