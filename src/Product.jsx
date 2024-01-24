import React, { useState } from 'react';

const Product = ({ product, cart, setCart }) => {

    const addToCart = (product) => {
        if (cart.some((item) => item.id === product.id)) {
            console.log(`${product.name} is already in the cart.`);
            return;
        }
        else {
            console.log(product, "added to cart");
            console.log([...cart, product], "Items in Cart");
            setCart((prev) => [...prev, product]);
        }

    };

    const removeFromCart = (product) => {
        if (!cart.some((item) => item.id === product.id)) {
            console.log(`${product.name} is not present in the cart.`);
            return;
        }

        console.log(`${product.name} removed from cart`);
        console.log(
            [...cart.filter((item) => item.id !== product.id)],
            "Items in Cart"
        );
        setCart((prev) => [...prev.filter((item) => item.id !== product.id)]);
    };

    return (
        <div className='p-3 border border-primary '>
            <h1>Name: {product.name}</h1>
            <h2>price: ${product.price}</h2>
            <div className='d-flex flex-column mt-4 gap-3'>
                <button type="button" className="btn btn-primary"
                    onClick={() => {
                        addToCart(product);

                    }}>Add to cart</button>
                <button type="button" className="btn btn-primary"
                    onClick={() => {
                        removeFromCart(product);
                    }}>Remove from cart</button>
            </div>
        </div>
    )
}

export default Product
