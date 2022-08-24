import React from 'react';
import { Link } from 'react-router-dom';

function Items({ image, name, price }) {
  return (
    <div className='menuItems'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1> { name }</h1>
        <p>Rs { price }</p>
        <Link to= '/cart'>
          <button>Add to cart</button>
        </Link>
    </div>
  );
}

export default Items;
