import "./App.css";
// import { Provider } from "react-redux";
// import store from "./redux/store/store";
// import Homepage from "./components/homepage/Homepage";
// import Login from "./components/login/Login";
// import Signout from "./components/signout/Signout";
// import Signup from "./components/signup/Signup";
// import Results from "./components/results/Results";
// import CardList from "./components/cardList/CardList";

import Example from './components/reactRouterExample/reactRouterRedirect'

//react router dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Example/>

    // <Provider store={store}>
    //   <Router>
    //     <div className="App">
    //       <nav>
    //         <ul>
    //           <li>
    //             <Link to="/">Homepage</Link>
    //           </li>

    //           <li>
    //             <Link to="/signout">Signout</Link>
    //           </li>

    //           <li>
    //             <Link to="/results">Results</Link>
    //           </li>
    //         </ul>
    //       </nav>
    //       <Switch>
    //         <Route exact path="/">
    //           <Homepage />
    //         </Route>

    //         <Route path="/signout">
    //           <Signout />
    //         </Route>

    //         <Route path="/results">
    //           <Results />
    //         </Route>
    //         <Route path="/login">
    //           <Login />
    //         </Route>
    //         <Route path="/signup">
    //           <Signup />
    //         </Route>
    //         <Route path="/user-list">
    //           <CardList />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </Router>
    // </Provider>
  );
}

export default App;


