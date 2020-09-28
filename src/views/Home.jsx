import React from 'react'
import { NavLink} from 'react-router-dom'
import '../css/home.css';
import logo from '../img/logo1.png';
import Carousel from '../components/Carousel'; 

const Home = () => {
  return (
    <>
    <div className="contHome">
      <img src={logo} alt='logo' className="logoHome"/>
       <div className="contButtonHome">
      <NavLink to='/login'>
        <button className="btnRegister">
            Ingresar
        </button>
      </NavLink>
      <NavLink to='/register'>
        <button className="btnRegister">
          Registrar
        </button>
      </NavLink>
      </div>
    </div>
     <Carousel />
     </>
  )
}

export default Home
