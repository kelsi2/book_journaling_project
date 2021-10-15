import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
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
          <Route exact path="/" component={Users} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
