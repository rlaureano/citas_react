import React from 'react'

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w2/5">

      <h2 className="font-black text-3x1 text-center">Seguimineto Pacientes</h2>
      
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold text-lg">Adminístralos</span>
      </p>

      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5">
        <div>
          <label htmlFor="" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input 
            type="text"
            placeholder="Nombre de la Mascota"
          />
        </div>
      </form>

    </div>
  )
}

export default Formulario
