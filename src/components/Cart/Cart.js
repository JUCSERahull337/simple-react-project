import React from 'react';

const Cart = (props) => {
    const cart=  props.cart;
    //console.log(cart);
    //const totalPrice = cart.reduce((total,prodct)=> total + prodct.price,0)
    let totalPrice=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice= totalPrice+ product.price
    }

    let shipping = 0.00;
    if(totalPrice>40){
        shipping=0;
    }

    else if(totalPrice>20){
        shipping=5.00;
    }
    else if(totalPrice>0){
        shipping=10.90;
    }
    //const tax= Math.round(totalPrice/10);
    const tax = totalPrice/10;
    const grandTotal= totalPrice + shipping + tax;
    const formatNumber=(num)=>{
        const presicion = num.toFixed(2);
        return Number(presicion); 
    }

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered:{cart.length}</p>
            <p>Total Price: {formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;