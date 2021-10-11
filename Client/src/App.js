import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CreateUser from "./components/CreateUser";
import Users from "./components/Users";
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={CreateUser} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
