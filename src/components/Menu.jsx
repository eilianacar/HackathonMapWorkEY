import React from 'react'
import '../css/menu.css';
import team from '../img/team.png';
import cake from '../img/cake.png';
import spaceship from '../img/spaceship.png';
import message from '../img/message.png';
import { NavLink} from 'react-router-dom'

const menu = () => {
    return (
        <div className="contmenu">
            <div>
            <NavLink to='/Profile'>
            <img src={team} alt='logo' className="logomenu"/>
            </NavLink>
             <p className="nameMenu">Perfil</p> 
            </div>

            <div>
            <NavLink to='/Single'>
            <img src={team} alt='logo' className="logomenu"/>
            <p className="nameMenu">Single</p>
            </NavLink>
            </div>

            <div>
            <NavLink to='/Feedback'>
            <img src={message} alt='logo' className="logomenu"/>
            <p className="nameMenu">Feedback</p>
            </NavLink>
            </div>

            <div>
            <NavLink to='/Task'>
            <img src={spaceship} alt='logo' className="logomenu"/>
            <p className="nameMenu">Tareas</p>
            </NavLink>
            </div>

            <div>
            <NavLink to='/Team'>
            <img src={team} alt='logo' className="logomenu"/>
            <p className="nameMenu">Team</p>
            </NavLink>
            </div>

            <div>
            <NavLink to='/birthday'>
            <img src={cake} alt='logo' className="logomenu"/>
            <p className="nameMenu">Cumpleanos</p>
            </NavLink>
            </div>
            
            
            
            

        </div>
    )
}

export default menu
