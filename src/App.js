import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";

// Step 2. Use <Route> components to define client-side routes in our app
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
//Now, instead of rendering all routes that match the current URL, it will only render the first route that matches any part of the URL. Currently, we'll always be rendering the Home component. We can fix this by moving the route for / to the bottom of our Switch component:

export default App;