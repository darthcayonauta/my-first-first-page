import logo from './logo.svg';
import './App.css';
import './components/comp1'
import Comp1 from './components/comp1';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';


function App() {

 // const comp1 = <Comp1 name="CLAUDIO"/>
  const url = "https://jsonplaceholder.typicode.com/todos/";

  //se pide guardar los datos en una variable 'todos' usando la funcion 'setTodos'
  const [todos,setTodos] = useState([])

  //defino una funcion  asincrona para leer la data desde la url
    const fetchApi = async ()=>{
    const response = await fetch(url);
    //capturas la data
    const responseJson = await response.json();  
    //usas la funcion setTodos
    setTodos( responseJson )
  }

  //el useeffect se usa para llamar a la funcion asincrona, en este caso
  //esto es un hook
  useEffect( ()=>{
    fetchApi()
  },[] )
    
 // console.log(todos)

  return (
    <div className="App">
      hola mundo
      <ul>
      { !todos ? 'Cargando...' : 
          todos.map(  (todo,index) =>{
            return   <li key={index}>{todo.title} {todo.completed ? '....OK' : '....X' }</li> 
          }  )
          }
      </ul>
         {todos.length} 
    </div>
  );
}

export default App;
