import React from 'react'
import { MapProgress } from '../components/MapProgress'
import SignOff from '../components/SignOff'
import NavbarPage from './NavbarPage'
import EmployeeMap from '../components/EmployeeMap'

const MapLeader = () => {
  return (
    <div>
      <NavbarPage/>
      <h1>Soy Mapa</h1>
      <EmployeeMap />
      <SignOff />
    </div>
  )
}

export default MapLeader
