import React from 'react'

export const ToDoListItem = ({toDo, index, handleDelete, handleToggle}) => {
  return (
    <li className='list-group-item' key={toDo.id}>
      <p 
        className={`${toDo.done && 'complete'}`} 
        onClick={() => handleToggle(toDo.id)}>{index + 1}. {toDo.desc}</p>
      <button
        className='btn btn-danger'
        onClick={() => handleDelete(toDo.id)}
      >Borrar</button>
    </li>
  )
}
