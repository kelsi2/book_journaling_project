import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CreateUser from "./components/CreateUser";
import Users from "./components/Users";
import Signup from './components/Signup';
import Login from './components/Login';
import AuthContext from './context/AuthContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={CreateUser} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
