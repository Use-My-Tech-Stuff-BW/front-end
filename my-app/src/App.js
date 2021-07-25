import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Login from './components/LogIn';
import SignUpForm from './components/CreateAccount';
import RenterSignUpForm from './components/CreateRenterAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path ='/' component={LandingPage} />
        <Route  path ='/login' component={Login} />
        <Route  exact path ='/register' component={SignUpForm} />
        <Route  path ='/register/renter' component={RenterSignUpForm} />
      </div>
    </Router>
  );
}

export default App;
