/** @format */

import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_add"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/INTEL/LFH_Work--Banner--1500x200.jpg"
          alt="add"
        />
        <div>
          <h2 className="checkout_tittle">Shopping Cart </h2>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
