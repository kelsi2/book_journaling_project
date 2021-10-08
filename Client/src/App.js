import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CreateUser from "./components/CreateUser";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CreateUser} />
        <Route path="/signup" component={CreateUser} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
