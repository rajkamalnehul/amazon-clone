/** @format */

import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct.js";

function Payment() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <h2>Checkout({basket?.length} items)</h2>
        <div className="payment_section">
          <div className="payment_tittle">
            <h4>Dilevery Address</h4>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>XYZ Street</p>
            <p>Bengalore,India</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_tittle">
            <h4>Review items and dilevery</h4>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                tittle={item.tittle}
                rating={item.rating}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_tittle">
            <h4>Payment Methods</h4>
          </div>
          <div className="payment_details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
