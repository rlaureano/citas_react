import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
 
function App() {
   
  return (
    <div className="container mt-10">
      <Header />
      <Formulario />
      <ListadoPacientes />      
    </div>
  )
}

export default App
 