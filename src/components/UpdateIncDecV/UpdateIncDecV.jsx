import React from 'react';

const UpdateIncDecV = (props) => {
    const {incrementValue,handleIncrementChange,decrementValue,handleDecremetnChange}=props
    return (
        <div>
            <label htmlFor="">Incremenet</label>
            <input type="number" value={incrementValue} onChange={handleIncrementChange}/>
            <label htmlFor="">Decrement</label>
            <input type="number" value={decrementValue}onChange={handleDecremetnChange}  />
        </div>
    );
};

export default UpdateIncDecV;