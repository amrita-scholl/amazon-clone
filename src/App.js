import React from "react";
import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
  return(
    <Router>
    <div className="app">
      <Switch>
        {/* <Route path="/orders">
          <Header />
          <Orders />
        </Route> */}
        <Route path="/login">
         
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
         <Route path="/payment">
          <Header />
          
          
        </Route> 
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
