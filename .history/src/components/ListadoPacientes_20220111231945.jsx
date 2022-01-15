import React from 'react'

const ListadoPacientes = () => {
  return (
    <div className="w-1/2 ld:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p>
          Nombre: {''}
          <span>Hook</span>
        </p>
      </div>
    </div>
  )
}

export default ListadoPacientes
