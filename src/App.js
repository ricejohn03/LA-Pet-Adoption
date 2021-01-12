import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import Search from "./pages/search.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search" component={Search} exact />
      </Switch>
    </Router>
  );
}

export default App;
