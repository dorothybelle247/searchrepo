import React from "react";
import "./style.css";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
    <Router>
    <Route path="/" exact={true}>
     <Dashboard></Dashboard>
    </Route>
    <Route path="/login">
      <Login />
      </Route>
      <Error />
      </Router>
    </div>
  );
}
