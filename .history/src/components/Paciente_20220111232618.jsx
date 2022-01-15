import React from 'react'

const Paciente = () => {
  return (
    <div>
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {''}
          <span className="font-normal normal-case">Raul</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {''}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {''}
          <span className="font-normal normal-case">10 diciembre 2012</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis maxime numquam, voluptatibus tempora reiciendis distinctio repellat, obcaecati facilis dolore modi accusantium alias perferendis? Obcaecati sit hic debitis molestias ratione error!</span>
        </p>
      </div>
    </div>
  )
}

export default Paciente
