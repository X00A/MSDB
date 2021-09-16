import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Home from "./view/Home";
import Navigation from "./components/Navigation/Navigation";
import MovieDetails from "./view/MovieDetails";
import SeriesDetails from "./view/SeriesDetails";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/movie-detail/:id'>
            <MovieDetails />
          </Route>
          <Route exact path='/series-detail/:id'>
            <SeriesDetails />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
