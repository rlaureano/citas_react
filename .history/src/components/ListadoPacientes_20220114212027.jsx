import React from 'react'
import Paciente from './Paciente'


const ListadoPacientes = ( { pacientes }) => {

  

  return (
    <div className="md:w-1/2 ld:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      { pacientes.map( ( paciente, index ) => <Paciente paciente = { paciente } key = { index }/> ) }
      
    </div>
  )
}

export default ListadoPacientes
