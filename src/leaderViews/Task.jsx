import React from 'react'
import AddTaks from '../components/AddTaks'
import '../css/task.css'
import NavbarPage from './NavbarPage'

const Task = () => {
    return (
        <>
        <NavbarPage />
        <h1>tarea</h1>
        <AddTaks />
        </>
    )
}

export default Task
