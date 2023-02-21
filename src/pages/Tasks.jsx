import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import CreateTask from '../components/Task/CreateTask';
import shortid from 'shortid';
import ShowTasks from '../components/Task/ShowTasks';

const Tasks = () => {
   const [tasks,setTasks]= useState([])
   const [visibility,setVisibility]=useState('all')

   const addNewTask=(text)=>{
const task={
    text,
    isComleted:false,
    createdAt:new Date(),
    id:shortid.generate()
}
setTasks([task,...tasks])
   }
    return (
        <Layout>
            <h1>Task List</h1>
            <CreateTask addNewTask={addNewTask}></CreateTask>
            <ShowTasks tasks={tasks}></ShowTasks>
        </Layout>
    );
};

export default Tasks;
// create new task
// display all tasks
// filter task complete incomplete and all
// delete task
// edit tasks