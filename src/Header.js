/** @format */

import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" />
        <SearchIcon fontSize="large" className="search_icon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_lineone">Hello</span>
          <span className="header_option_linetwo">SignIn</span>
        </div>
        <div className="header_option">
          <span className="header_option_lineone">Returns</span>
          <span className="header_option_linetwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_lineone">Try</span>
          <span className="header_option_linetwo">Prime</span>
        </div>

        <div className="header_optionBasket">
          <Link to="/checkout" style={{ color: "#FFF" }}>
            <ShoppingCartIcon />
          </Link>

          <span className="header_option_linetwo header_basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
