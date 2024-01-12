import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal'
import img1 from './assets/ad.jpg'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img src={img1} alt="" className="checkout_ad" />
    <div>
      <h3>Hello {user?.email}</h3>
      <h2 className="check_title">
        Your shopping Basket
      </h2>
      {basket.map(item => (
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

    <div className="checkout_right">
      
      <Subtotal/>
    </div>
    </div>
  )
}

export default Checkout