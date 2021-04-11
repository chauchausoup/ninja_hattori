import React from "react";
//react router dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "../login/Login";
import Signup from "../signup/Signup";
import CardList from "../cardList/CardList";

function Homepage() {
  return (
    <div>
      <nav>
        <ul>
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
      <Route path="/user-list">
        <CardList />
      </Route>
    </div>
  );
}

export default Homepage;
