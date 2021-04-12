import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Signout from "./components/signout/Signout";
import Signup from "./components/signup/Signup";
import Results from "./components/results/Results";
import CardList from "./components/cardList/CardList";

// import Example from './components/reactRouterExample/reactRouterRedirect'

//react router dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ProvideAuth, PrivateRoute } from "./components/authUtilities";

function App() {
  return (
    // <Example/>

    <Provider store={store}>
      <ProvideAuth>
        <Router>
          <div className="App">
            <nav>
              <ul className="navigation">
                <li>
                  <Link to="/">Homepage</Link>
                </li>

                <li>
                  <Link to="/results">Results</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>

              <Route path="/signout">
                <Signout />
              </Route>

              <Route path="/results">
                <Results />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <PrivateRoute path="/user-list">
                <CardList />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </ProvideAuth>
    </Provider>
  );
}

export default App;
