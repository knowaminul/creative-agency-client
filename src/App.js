import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Order from './components/Dashboard/Customer/Order/Order';
import OrderList from './components/Dashboard/Customer/OrderList/OrderList';
import Review from './components/Dashboard/Customer/Review/Review';
import CustomerList from './components/Dashboard/Admin/CustomerList/CustomerList';
import AddService from './components/Dashboard/Admin/AddService/AddService';
import AddAdmin from './components/Dashboard/Admin/AddAdmin/AddAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute path="/addOrder/:title">
            <Order/>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <OrderList/>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <Review/>
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <CustomerList/>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin/>
          </PrivateRoute>                                      
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;