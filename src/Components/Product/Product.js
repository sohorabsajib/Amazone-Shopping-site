import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';



const Product = (props) => {
    const {handleAddToCart,product}=props;
    const{name,img,seller,ratings,price}=product;
    
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className="product-info">
            <p className='product-name'>{name} </p>
            <p><small>Price: ${price}</small> </p>
            <p><small>Seller: {seller}</small>  </p>
            <p><small>Ratings: {ratings}</small>  </p>
          </div>
          <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
            <p>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
          </button>

        </div>
    );
};

export default Product;