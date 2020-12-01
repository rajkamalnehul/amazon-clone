/** @format */

import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <strong>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </strong>
            <small>
              <input type="checkbox" /> This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeprator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
