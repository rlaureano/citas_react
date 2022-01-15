import { useState } from "react"

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
 
function App() {
  
  const [ pacientes, setPacientes ] = useState([])
  const [ paciente, setPaciente ] = useState({})

  const eliminaPaciente = id => {

    const pacientesFiltrados = pacientes.filter( pacienteFiltrado => pacienteFiltrado.id != id );

    setPacientes(pacientesFiltrados);
  }

  return (
    <div className="container mx-auto mt-20 max-w-7xl">
      <Header  />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes = { pacientes }
          setPacientes = { setPacientes }
          paciente = { paciente }
          setPaciente = { setPaciente }
        />
        <ListadoPacientes
          pacientes = { pacientes }
          setPaciente = { setPaciente }
          eliminaPaciente = { eliminaPaciente }
        />      
      </div>
    </div>
  )
}

export default App
 