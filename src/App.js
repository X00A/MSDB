import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./view/Home";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
