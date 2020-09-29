import React from 'react'
import { db} from '../firebase'
import '../css/addtaks.css'

const AddTaks = () => {
    
  const [tareas, setTareas] = React.useState([])
  const [tarea, setTarea] = React.useState('')
  const [fecha, setFecha] = React.useState('')
  const [describ, setDescrib] = React.useState('')
  const [nivel, setNivel] = React.useState('')
  const [asignar, setAsignar] = React.useState('')
  const [start, setStart] = React.useState(0)

    const add = async (e) => {
        e.preventDefault()
    
        if(!tarea.trim()){
          console.log('está vacio')
          return
        }
        
        try {
          const nuevaTarea = {
            name: tarea,
            fecha: Date.now(), 
            descripcion: describ,
            nivel: nivel,
            estado: 'pendding',
            estrellas: start,
          }
          const data = await db.collection('tareas').add(nuevaTarea)
          setTareas([
            ...tareas,
            {...nuevaTarea, id: data.id}
          ])
    
          setTarea('')
          setFecha('')
          setDescrib('')
          setNivel('')
          setAsignar('')
          
        } catch (error) {
          console.log(error)
        }
        console.log(tarea)
      }
    

    return (
        <div>
            <form className="formTarea">
            <input 
              type="text"
              placeholder="Ingrese tarea"
              className="inputTarea"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            <input 
              type="date"
              placeholder="Fecha"
              className="inputTarea"
              onChange={e => setFecha(e.target.value)}
              value={fecha}
            />
            <input 
              type="text"
              placeholder="Descripción"
              className="inputTarea"
              onChange={e => setDescrib(e.target.value)}
              value={describ}
            />
            <select name="select" value={asignar} onChange={e => setAsignar(e.target.value)} className="inputTarea">
                <option aria-label="None" value="" />
                <option value="single">Single</option> 
                <option value="team">Team</option>
            </select>
            <select name="select" value={nivel} onChange={e => setNivel(e.target.value)} className="inputTarea">
                <option aria-label="Selecciona el nivel" value="" />
                <option value="nivel1">Nivel 1</option> 
                <option value="nivel2">Nivel 2</option>
                <option value="nivel3">Nivel 3</option>
            </select>
            <button 
            className=""
            onClick={add}
            >
            Agregar
            </button>
          </form>
        </div>
    )
}

export default AddTaks
