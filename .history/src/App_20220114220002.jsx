import { useState } from "react"

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
 
function App() {
  
  const [ pacientes, setPacientes ] = useState([])
  const [ paciente, setPacientes ] = useState({})

  return (
    <div className="container mx-auto mt-20 max-w-7xl">
      <Header  />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes = { pacientes }
          setPacientes = { setPacientes }
        />
        <ListadoPacientes
          pacientes = { pacientes }
          setPaciente = { setPaciente }
        />      
      </div>
    </div>
  )
}

export default App
 