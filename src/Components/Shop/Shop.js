import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart] =useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
    useEffect(()=>{
        console.log('product loaded local storage');
        const stroredCart = getStoredCart();
        const savedCart = [];
        for(const id in stroredCart){
            const addedProduct = products.find(product => product.id === id )
            if(addedProduct){
                const quantity = stroredCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])
    const handleAddToCart=(selectedProduct)=>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity =1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        //cart.push(product);
        // const newCart = [...cart,selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    
    
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    
                    ></Product>)
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
                
            </div>
           

        </div>
    );
};

export default Shop;