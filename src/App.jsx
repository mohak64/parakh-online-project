import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./data.json"
import Product from "./Product";

function App() {
  const ProductData = [...data.data];
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className='fs-1 h2'>Parakh Online Assignment</div>
      {ProductData.map((item, idx) => (
        <div key={item.name}>
          <div className='container mt-5 h3 text-start'>{item.name}
            <div className='border border-dark border-2'>
            </div>
            <div className='d-flex gap-4 my-4'>
              {item.productList.map((product) => (

                < Product
                  key={product.id}
                  product={product}
                  cart={cart}
                  setCart={setCart}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

    </>
  )
}

export default App
