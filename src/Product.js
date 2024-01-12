import React from "react";
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({id,title,image,price,rating}) {
  const [{basket},dispatch]=useStateValue();

  console.log("This is basket",basket)
  const addtoBasket =()=>{
    //dispatch the item into the data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      }
    })
  }

  return <div className="product"> 
    <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        </div>
        <img src={image} alt="" />
        <div className="product_rating">
          {Array(rating).fill().map(( _ ,i)=>(
            <p>⭐</p>
          ))}
           {/* Array(rating).fill(): This line creates an array of length rating filled with undefined values.
           The .map() function is used to iterate over each element in the array.
           we use _ (an underscore) as a placeholder for the current element, which we are not using, and i to represent the index of the element. */}
        </div>
    <button onClick={addtoBasket} className="product_button">Add to Bucket</button>
    
  </div>
  
}

export default Product;
