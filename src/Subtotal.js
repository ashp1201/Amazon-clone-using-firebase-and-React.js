import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer";
import { useNavigate } from 'react-router-dom';

function Subtotal() {
const navigate =useNavigate();

  const [{basket},dispatch]=useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat 
      renderText={(value)=>(
        <>
        <p>
          Subtotal ( {basket.length} items ):
          <strong>`{value}`</strong>
        </p>
        <small className="subtotal_gift">
          <input type="checkbox" name="" id="" />
          This order a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)} 
      displayType={"text"}
      thousandSeperator={true}
      prefix={"$"}
        />

        <button onClick={e=> navigate('/payment')}>Proceed to CheckOut</button>
    </div>
  )
}

export default Subtotal