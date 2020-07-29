import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AddStudent from "./components/AddStudent"
import UserInfo from './components/UserInfo';

function App() {
  return ( 
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addStudent" component={AddStudent} />
            <Route exect path="/details/:id" component={UserInfo} />
          </Switch>
          </div>
      </Router>    
  );
}

export default App;
