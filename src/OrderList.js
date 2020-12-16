/** @format */

import React from "react";
import "./OrderList.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "./StateProvider";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function OrderList({ order }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [{ user }] = useStateValue();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="odr">
      <div className="odr_header">
        <div className="odr_header_left">
          <div className="odr_header_options">
            <small>ORDER PLACED</small>
            <small>
              {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
            </small>
          </div>
          <div className="odr_header_options">
            <small>TOTAL</small>
            <small>${order.data.amount}</small>
          </div>
          <div className="odr_header_options">
            <small>SHIP TO</small>
            <Typography
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            >
              <small id="mouse_popover">{order.data.name}</small>
            </Typography>
            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography>
                <small>
                  <strong>{order.data.name}</strong>
                </small>
              </Typography>
              <Typography>
                <small>{order.data.address_line1}</small>
              </Typography>
              <Typography>
                <small>{order.data.address_city}</small>
              </Typography>
              <Typography>
                <small>{order.data.address_country}</small>
              </Typography>

              <Typography>
                <small>{order.data.pin}</small>
              </Typography>
            </Popover>
          </div>
        </div>
        <div className="odr_header_right">
          <div className="odr_header_options">
            <small>ORDER ID</small>
            <small>{order.id}</small>
          </div>
        </div>
      </div>

      <div className="odr_items">
        {order.data.basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            tittle={item.tittle}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
      </div>
    </div>
  );
}

export default OrderList;
