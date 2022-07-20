import React, { useState } from 'react'

function AgregarTarea({addTodo}) {

    const [userInput,setUserInput,] = useState('Titulo');
    const [userInput2,setUserInput2] = useState('Descripción');

    const CambiarTexto = (e) => {
        setUserInput(e.currentTarget.value);

    }

    
    const Descripcion = (e) => {
        setUserInput2(e.currentTarget.value);

    }

    const Nuevatarea = (e) =>{
        e.preventDefault();
        if((userInput.trim())!== '' && (userInput2.trim()) !== ''){
            
            addTodo(userInput, userInput2);
             
            setUserInput('');
            setUserInput2('');
        }

    }


  return ( 
    <div style={{margin:20}}>
        <form onSubmit={Nuevatarea} >
            <center><h1>Simulador de  Post It</h1></center>
            <input type = "text" value = {userInput} onChange = {CambiarTexto} required />
            
            <input type = "text" value = {userInput2} onChange = {Descripcion}/>

            <button>Agregar nota</button>
            
        </form>

    </div>
  )
}
export default AgregarTarea;