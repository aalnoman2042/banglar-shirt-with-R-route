import React from 'react';
import Bondhu from '../Bondhu/Bondhu';

const Cousin = ({children, hasBondhu, ring}) => {
    return (
        <div>
            <h2>cousin</h2>
            <p><small>{children}</small></p>

            {hasBondhu && <Bondhu ring={ring}></Bondhu>}
            
        </div>
    );
};

export default Cousin;