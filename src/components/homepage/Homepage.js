import React, { useContext, createContext, useState } from "react";
//react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import Login from "../login/Login"; //login button page or a component
import Signup from "../signup/Signup"; // public
import CardList from "../cardList/CardList"; //protected



function Homepage() {
  return (
    <Router>
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
        <PrivateRoute path="/user-list">
          <CardList />
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default Homepage;

//there is a fakeAuth() too

//it is a typical object that has data and methods

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

//now we will make a useProvideAuth() that will contain the actual authentication information
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const signin = (cb) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
}

//authContext is used with the provider to invoke the value in subsequent components

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
}

//authContext object

const AuthContext = createContext();

//useAuth()

function useAuth() {
  return useContext(authContext);
}

// a wrapper for route that redirects to /login if you are not authnticated

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render=
      {({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect 
          to={{ 
            pathname: "/login", 
            state: { from: location }
          }} />
        )
      }
    />
  );
}
