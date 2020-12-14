/** @format */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51Hvd6KHsdJ1AoFuFTcpzfTCVZ7R9EwzonPGG9XjYLBZavl5ksxoJuoLDuqWj0Dfrls0FOjWuhHZnWHiKKXmM9H2t005pFOOrc8"
);

//API

//-App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment req recieved", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-92c3c/us-central1/api
