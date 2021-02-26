import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    console.log(fakeData)
    const first10= fakeData.slice(0,10)
    const [products , setProducts] =useState(first10);
    const [cart , setCart]= useState([]);


    const handleAddProduct = (product)=>{
        console.log('Product added',product);
        const newCart= [...cart, product];
        setCart(newCart);
    }
   
    
    return (
        <div className='shop-container'>
            {/* <h1>This is a shop</h1> */}
            {/* <h3>{products.length}</h3> */}
            <section className='product-container'>
            
                {
                    // products.map(product => <Product name={product.name} img={product.img}></Product>)
                    products.map(product => <Product handleAddProduct={handleAddProduct} product={product}></Product>)
                }
            

            </section>
            <section className='cart-container'>
                {/* <h2>This is cart</h2>
                <h5>Order Summery: {cart.length}</h5> */}
                <Cart cart={cart}></Cart>
            </section>
           
            
        </div>
    );
};

export default Shop;