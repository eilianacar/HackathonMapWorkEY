import React, { useState, useEffect } from 'react';
import DataEmployeeMap from '../data/employee-tasks.json'
import MapProgress from '../components/MapProgress'

 const EmployeeMap = () =>{
  const [state, setState] = useState({
    tasks:[]
  });
  useEffect(()=>{
    const tasks = DataEmployeeMap.employeeTasks.employee.tasks
    setState({tasks:tasks})
  },[]); 
  const onTaskChange = (completed = true, id) =>{    
      setState(prevState=>({
        tasks: prevState.tasks.map((task)=>{
          if (task.id === id){
            task.completed=completed          
          }
          return task
        })
      }))
    }

  return(
    <div>
      <p>Creando mapa de trabajo</p>
      <MapProgress tasks={state.tasks} onTaskChange ={onTaskChange}/>
    </div>
  )
};
export default EmployeeMap