import React from 'react'

function Items({tarea,Eliminar}) {

    const getStyle = () =>{
        return {
            
            margin: '20px',
            border: '1px solid #ffffff',
            backgroundColor:'#CCF7E3',
            width:'250px',
            height:'250px',
            
            
        }
    }


  return (
    <div className='nota' style={getStyle()}>
        
        <button className='add-btn' onClick={() => Eliminar(tarea.id)}>X</button>
        {tarea.titulo}
        {tarea.descripacion}
    </div>
  )
}
export default Items;
 