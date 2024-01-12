import React, { useState, useEffect } from "react";
import "./Payment.css";
import img1 from './assets/amz-lgo.png'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";

import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "./reducer";



function Payment() {


  const [{ basket, user }, dispatch] = useStateValue();
 
  const [Razorpay, isLoaded] = useRazorpay();

  const handlePayment = useCallback(async () => {
   

    const options: RazorpayOptions = {
      key: "rzp_test_WxCeIsVKpl2pCQ",
      amount: getBasketTotal(basket)*100,
      currency: "INR",
      name: "Amazon Fake Website",
      description: "Test Transaction",
      image: img1,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "hello World",
        email: "amazon@gmail.com",
        contact: "9351220194",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>201 Virar West</p>
            <p>Mumbai </p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review item and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <p>Total To Pay :${getBasketTotal(basket)}</p>
           <button onClick={handlePayment} >Proceed to  Payment</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
