import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { PublicPage, ProtectedPage, LoginPage, AuthButton } from "./Pages";

import {
  ProvideAuth,
  PrivateRoute
} from "./authUtilities";


//example: https://reactrouter.com/web/example/auth-workflow


export default function AuthExample() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}