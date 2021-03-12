import React from 'react'
import { ToDoListItem } from './ToDoListItem'

export const ToDoList = ({toDos, handleDelete, handleToggle}) => {
  return (
    <div className='col-7'>
      <ul className='list-group list-group-flush'>
          {
            toDos.map((toDo, index) => (
              // ToDoListItem, toDo, index, handleDelete, handleToggle
              <ToDoListItem 
                toDo={toDo}
                index={index}
                key={index}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
              />
            ))
          }
        </ul>
    </div>
  )
}
