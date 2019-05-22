import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Home from "../Home/Home";

export default class App extends React.Component {
  render(){
    return(
      <main>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </BrowserRouter>
        <p>helloworld</p>
      </main>

    );
  }
}