import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div>
            <h3>order summery:{cart.length}</h3>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}</p> )
            }
        </div>
    );
};

export default Cart;