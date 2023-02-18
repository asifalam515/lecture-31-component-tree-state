import React from 'react';

const Buttons = (props) => {
    return (
        <div>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            
        </div>
    );
};

export default Buttons;