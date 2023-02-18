import React from 'react';
import Layout from '../components/layout/Layout';
import { useState } from 'react';
import DisplayCount from '../components/Displaycount/DisplayCount';
import Buttons from '../components/Buttons/Buttons';
import UpdateIncDecV from '../components/UpdateIncDecV/UpdateIncDecV';

const About = () => {
    const [count,setCount]=useState(15)
    const [incrementValue,setIncrementValue]=useState(5)
    const [decrementValue,setDecrementValue]=useState(5)
    const increment=()=>{
        setCount(count+incrementValue)
    }
    const decrement=()=>{
        setCount(count-decrementValue)
    }
    const handleIncrementChange=(event)=>{
setIncrementValue(parseInt(event.target.value))
    }
    const handleDecremetnChange=(event)=>{
        setDecrementValue(parseInt(event.target.value))
    }
    return (
        <div>
            <Layout>
                <h1>Hello ,I am about page</h1>
               <DisplayCount count={count}></DisplayCount>
               <UpdateIncDecV incrementValue={incrementValue} decrementValue={decrementValue} handleIncrementChange={handleIncrementChange} handleDecremetnChange={handleDecremetnChange}></UpdateIncDecV>
               <Buttons increment={increment} decrement={decrement}  ></Buttons>
            </Layout>
        </div>
    );
};

export default About;