/** @format */
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders.js";
//import { loadStripe } from "@stripe/stripe-js";
//import { Elements } from "@stripe/react-stripe-js";

//const promise = loadStripe(
//  "pk_test_51Hvd6KHsdJ1AoFuFbN0Zlq2ely6MEoXyzjVUjbaCaZXQNuY2GaO3n9ksVcmUDxLB2ZQZ51xeT0lRVWnli8wZWLVl00o2d8lawD"
//);

function App() {
  const [{}, dispatch] = useStateValue();

  //it will keep track of whic user is signed in or not
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user", authUser);
      if (authUser) {
        //the user is/was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />

            <Payment />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
