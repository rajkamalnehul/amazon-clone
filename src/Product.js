/** @format */

import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, tittle, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log("clicked");

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: { id },
        tittle: tittle,
        image: image,
        price: price,
        rating: rating,
      },
    });
    console.log("cart", basket);
  };

  return (
    <div className="product">
      <strong>{tittle}</strong>
      <img src={image} alt="product"></img>
      <div className="product_info">
        <small>$</small>
        <strong>{price}</strong>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
