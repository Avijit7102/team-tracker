import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import NoFound from './components/NoFound/NoFound';
import TeamDetails from './TeamDetails/TeamDetails';
function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NoFound></NoFound>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
