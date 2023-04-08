import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {picture , name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>price: ${price}</p>
            <button onClick={() =>handleAddToCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;