import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    console.log(props);
    const {img, name,seller,price,stock}= props.product;
    return (
        <div className='product'>
            <div>
                {/* <img src={props.product.img} alt=""/> */}
                <img src={img} alt=""/>

            </div>
            <div className='productName-div'>
                {/* <h1>{props.product.name}</h1> */}
                <h4 className='product-name'>{name}</h4>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className='cart-button' 
                onClick={()=> props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;