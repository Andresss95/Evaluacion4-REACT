import {useState} from 'react'
import './App.css';
import AgregarTarea from './componentes/AgregarTarea';
import ListaTareas from './componentes/ListaTareas';
import datos from './datos.json'

function App() {

  const [tareas , setTareas] = useState(datos);

  const onCompletado = (id) =>{
    console.log('titulo', id)

    setTareas(tareas.map((mitarea) => { 
      return mitarea.id === Number(id) ? {...mitarea,completado: !mitarea.completado} : {...mitarea };
    }))

  }

  const Eliminar = (id) => {
    setTareas([...tareas].filter(items => items.id !== id))
  }

  const addTodo = (NuevaNota, descripcion) => {
    console.log('NuevaNota', NuevaNota);
    console.log('descripcion', descripcion);
    let NuevoItem = {id : +new Date(), titulo : NuevaNota, descripcion : descripcion, completado : false};
    

    setTareas([...tareas, NuevoItem]);

  }

  return (
    <div className="container"> 
     <AgregarTarea addTodo = {addTodo}/>

      <ListaTareas tareas={tareas} onCompletado = {onCompletado} Eliminar = {Eliminar} />
      
      
    </div>
  );
}

export default App;
