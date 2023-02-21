import React, { useState } from 'react';

const CreateTask = (props) => {
    const [text,setText]=useState('');
    
    
    return (
        <div>
            <input type="text" placeholder='Type Your Tasks'value={text} onChange={(event)=>{
                setText(event.target.value)
            }} />
            <button onClick={()=>{
                if(text){
                    props.addNewTask(text)
                }else{
                    alert('Invallid Task')
                }
            }}>Create Task</button>

        </div>
    );
};

export default CreateTask;