/** @format */

import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct.js";
//import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { db } from "./firebase";
import { Button } from "@material-ui/core";
//import axios from "./axios";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const priceForStripe = getBasketTotal(basket) * 100;

  const onToken = (token) => {
    alert("Payment Sucessfull");
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(token.id)
      .set({
        basket: basket,
        amount: getBasketTotal(basket),
        created: token.created,
        address_city: token.card.address_city,
        address_country: token.card.address_country,
        address_line1: token.card.address_line1,
        pin: token.card.address_zip,
        name: token.card.name,
      });

    dispatch({
      type: "EMPTY_BASKET",
    });
    history.replace("/orders");
  };

  const disabledButton = () => {
    if (!user) {
      alert("Sign In to Pay");
    } else {
      alert("no products added");
    }
  };
  //const stripe = useStripe();
  //const elements = useElements();
  //const [error, setError] = useState(null);
  //const [disabled, setDisabled] = useState(true);
  //const [sucess, setSucess] = useState(false);
  //const [processing, setProcessing] = useState("");
  //const [clientSecret, setClientSecret] = useState(true);

  //useEffect(() => {
  //genrate special secret of customer
  //const getClientSecret = async () => {
  //const response = await axios({
  // method: "post",
  // url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
  // });
  // setClientSecret(response.data.clientSecret);
  // };
  // getClientSecret();
  //}, [basket]);

  //const handlePayment = async (event) => {
  //event.preventDefault();
  //setProcessing(true);
  //const payload = await stripe
  //  .confirmCardPayment(clientSecret, {
  //   payment_method: {
  //      card: elements.getElement(CardElement),
  //    },
  //  })
  //  .then(({ paymentIntent }) => {
  //    setSucess(true);
  //    setError(null);
  //   setProcessing(false);
  //   history.replace("/orders");
  //  });
  //};

  //const handleChange = (e) => {
  // setDisabled(e.empty);
  //   setError(e.error ? e.error.message : "");
  // };

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
          <div className="payment_details">
            <div className="price">
              <CurrencyFormat
                renderText={(value) => <strong>Order Total: {value}</strong>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeprator={true}
                prefix={"$"}
              />
            </div>
            {user && basket.length ? (
              <StripeCheckout
                name="AMAZON"
                billingAddress
                shippingAddress
                description={`Total Amount $${getBasketTotal(basket)}`}
                amount={priceForStripe}
                panelLabel="Pay Now"
                token={onToken}
                currency="USD"
                stripeKey="pk_test_51Hvd6KHsdJ1AoFuFoYEInPcEoGQDo7SjAvjq3LSmGTYYruBNSiBbd6Rtbd5iLDDqksGSfNWzju7Eeqy8S8VuLd4U0047PfGMKA"
              />
            ) : (
              <Button
                variant="contained"
                color="default"
                onClick={disabledButton}
              >
                Pay With Card
              </Button>
            )}

            {/*  <form onSubmit={handlePayment}>
              <CardElement onChange={handleChange} />
              <div className="price">
                <CurrencyFormat
                  renderText={(value) => <strong>Order Total: {value}</strong>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeprator={true}
                  prefix={"$"}
                />
                <button
                  className="payment_button"
                  disabled={processing || disabled || sucess}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
             
              {error && <div>{error}</div>}
            </form>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
