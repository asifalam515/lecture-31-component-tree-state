import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';

 const Help = () => {
    const [name,setName]=useState('')
    useEffect(()=>{
       
    },[])

const data=[{
    name:'Abdullah turkey',
    email:'abdulla@gmail.com'
},
    {name:'najmul',
    email:'najmul@gmail.com'
},
   { name:'ridoy',
    email:'ridoy@gmail.com'
},
{
    name:'naim',
    email:"naim@gmail.com"
}
]
// const data=[]
    
    return (
        <div>
            <Layout>
              {name ? <h1>Hello {name}</h1>: <h1>Hello Guest</h1>}
  {data.length>0? <ul>
    {data.map(item=> <li> {item.name},{item.email}</li>)}
        
    </ul>:<h1>There is No Data</h1>}
            </Layout>
        </div>
    );
};

export default Help;