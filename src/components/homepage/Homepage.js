import React from "react";
//react router dom
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

import Login from "../login/Login"; //login button page or a component
import Signup from "../signup/Signup"; // public
import CardList from "../cardList/CardList"; //protected
import Signout from '../signout/Signout'
import {PrivateRoute} from '../authUtilities'



function Homepage() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Signout/>
            </li>
            <li>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button>Signup</button>
              </Link>
            </li>
            <li>
              <Link to="/user-list">Cardlist</Link>
            </li>
          </ul>
        </nav>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <PrivateRoute path="/user-list">
          <CardList />
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default Homepage;
