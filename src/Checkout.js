/** @format */

import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider.js";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_add"
          src="https://m.media-amazon.com/images/G/31/img20/AmazonPay/Travel/Ingresses/NovemberDecember/Flights_770x150_Dashboard-BTF_PC._CB417106370_.jpg"
          alt="add"
        />
        <div>
          <h2 className="checkout_tittle">Shopping Cart </h2>
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
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
