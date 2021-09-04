import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckoutSuccess.css";
import check from "./check.png";
import { Link } from 'react-router-dom';

console.log(check);

const CheckoutSuccess = () => {
  return (
    <div className="d-flex card-container justify-content-center">
      <div className="in-container d-flex-col w-75 text-center shadow-lg p-5 mb-5 bg-white rounded">
        <img className="check-icon" src={check} alt="" />
        <h2 className="text-success">Order Confirmed</h2>
        <p>
          Your order is confirmed. You will receive an order confirmation
          email/SMS shortly with the expected delivery date for your item.
        </p>
        <div>
          <Link to="/">
            <button className="s-btn p-2 m-3">CONTINUE SHOPPING</button>
          </Link>
          <button className="s-btn p-2 m-3">VIEW ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
