import React from 'react';
import "./Cart.css"
const Cart = ({cart, handleRemoveFromCart}) => {
   
    return (
        <div>
            <h3>order summery:{cart.length}</h3>
            {
                cart.length > 2 ? <span className='orange'>aro kino </span> : <p>fokir beda</p>
            }
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}
                <button onClick={() =>handleRemoveFromCart(tshirt._id)}>X</button>
                </p> )
            }
        </div>
    );
};

export default Cart;