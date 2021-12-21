import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import "./Checkout.css";

function App() {
  return (
    <Router>
      <div className="app">
         <Switch>
           <Route path="/checkout">
           <Header />
             <Checkout />
           </Route>
           <Route path="/login">
             <h1>login</h1>
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
