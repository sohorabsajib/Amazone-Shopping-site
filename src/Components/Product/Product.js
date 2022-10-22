import React from 'react';
import './Product.css';



const Product = (props) => {
    
    const{name,img,seller,ratings,price}=props.product;
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className="product-info">
            <p className='product-name'>{name} </p>
            <p><small>Price: ${price}</small> </p>
            <p><small>Seller: {seller}</small>  </p>
            <p><small>Ratings: {ratings}</small>  </p>
          </div>
          <button className='btn-cart'>
            <p>Add to Cart</p>
          </button>

        </div>
    );
};

export default Product;