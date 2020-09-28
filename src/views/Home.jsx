import React from 'react'
import { NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button';


const Home = () => {
  return (
    <div>
      <h1>Hola soy home</h1>
      <NavLink to='/login'>
        <Button variant="contained" color="secondary">
          Entrar
        </Button>
      </NavLink>
    </div>
  )
}

export default Home
