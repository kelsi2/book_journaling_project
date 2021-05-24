import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CreateUser} />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
