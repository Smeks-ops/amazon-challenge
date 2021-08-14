import './App.css';
import Header from './Header.js';
import Home from './Home.js'
import React, { useEffect } from 'react';
import Login from './Login.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {

  return (
    //BEM
    <div>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <h1>Cheakout Page</h1>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>

        </div>
      </Router>
    </div>
  );
}


export default App;
