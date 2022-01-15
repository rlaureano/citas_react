import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
 
function App() {
   
  return (
    <div className="container mx-auto mt-20">
      <Header  />
      <Formulario className="w-1/2" />
      <ListadoPacientes className="w-1/2" />      
    </div>
  )
}

export default App
 