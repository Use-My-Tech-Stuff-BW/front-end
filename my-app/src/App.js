import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Login from './components/LogIn';
import SignUpForm from './components/CreateAccount';
import RenterSignUpForm from './components/CreateRenterAccount';
import OwnerDashboard from './components/OwnerDashboard/OwnerDashboard';
import RenterDashboard from './components/RenterDashboard/RenterDashboard';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path ='/' component={LandingPage} />
        <Route  path ='/login' component={Login} />
        <Route  exact path ='/register' component={SignUpForm} />
        <Route  path ='/register/owner' component={RenterSignUpForm} />
        <Route exact path ='/dashboard/owner' component={OwnerDashboard} />
        <Route exact path ='/dashboard' component={RenterDashboard} />
      </div>
    </Router>
  );
}

export default App;
