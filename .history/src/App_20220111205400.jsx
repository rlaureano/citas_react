import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
 
function App() {
   
  const mensaje = "Hola"
  return (
    <>
      <Header />
      <Formulario />
      <ListadoPacientes />      
    </>
  )
}

export default App
 