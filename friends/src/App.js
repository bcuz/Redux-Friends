import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;