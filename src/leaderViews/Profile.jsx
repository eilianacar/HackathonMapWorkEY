import React from 'react'
import { db} from '../firebase'
import firebase from 'firebase';
import imgPerfil from '../img/perfil.png'
import '../css/profile.css'
import NavbarPage from './NavbarPage'
import Footer from '../components/Footer';

const Profile = () => {
  
  const [user, setUser] = React.useState([])
  const [name, setName] = React.useState([])

/* 
  console.log('name',userName)
  console.log('nombre usuario', userName.uid)
   React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const userName = firebase.auth().currentUser;
        const data = await db.collection('users').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log(arrayData) 
        setUser(arrayData)
        setName(userName)
        console.log('name',userName)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [])  */

  return (
    <section style={{height:'100vh'}}>
      <NavbarPage />
    <div className="contgeneralPerfil">
{/*         {
          user.map(item => ( */}
          <div className="contPerfil" /* {item.id} */>
            <div>
              <img src={imgPerfil} alt="" className="imgProfile"/>
            </div>
            <div className="contTextProfile">
              <div>
          <p className="textProfile1 textProfile">Sofia Miranda</p>
  {/*             </div>
              <div> */}
                <p className="textProfile2 textProfile">Jefe de Proyecto</p>
              </div>
            </div>
          </div>
{/*            ))
          } */}
        </div>
        <div className="continfo">
            <p className="titleperfil">Frase Típica</p>
            <div className="texts">"Después de la pandemia empiezo la dieta"</div>
            <p className="titleperfil">Especialidad</p>
            <div className="texts">Scrum Master</div>
            <p className="titleperfil">Proyecto Actual</p>
            <div className="texts">Mejora de Proceso</div>
            <p className="titleperfil">Cumpleaños</p>
            <div className="texts">20/08/1988</div>
          </div>
          <Footer />
      </section>
  )
}

export default Profile
