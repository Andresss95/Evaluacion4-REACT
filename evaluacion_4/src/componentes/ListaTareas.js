import React from 'react'
import Items from './Items';

function ListaTareas({tareas, onCompletado, Eliminar}) {
  return (
    <div>
        {
            tareas.map((tarea, index) => (
              <Items key ={`tarea-${index}`} tarea = {tarea} onCompletado ={onCompletado} Eliminar = {Eliminar} />

            ))
        }
    </div>
  )
}

export default ListaTareas;