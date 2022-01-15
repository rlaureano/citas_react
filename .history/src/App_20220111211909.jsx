import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
 
function App() {
   
  const mensaje = "Hola"
  return (
    <div>
      <Header />
      <Formulario />
      <ListadoPacientes />      
    </div>
  )
}

export default App
 