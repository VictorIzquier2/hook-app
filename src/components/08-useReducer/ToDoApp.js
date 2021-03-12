import React, {useReducer, useEffect} from 'react';
import { toDoReducer } from './toDoReducer';

import './toDoApp.css';
import { ToDoList } from './ToDoList';
import { ToDoAdd } from './ToDoAdd';

const init = () => {

  return JSON.parse(localStorage.getItem('toDos')) || [];
  
  //return [{
    //id: new Date().getTime(),
    //desc: 'Aprender React',
    //done: false,
  //}];
}

export const ToDoApp = () => {

  const [toDos, dispatch] = useReducer(toDoReducer, [], init);

  useEffect( () => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos])

  const handleDelete = (toDoId) => {

    console.log(toDoId);

    // crear la acción
    const action = {
      type: 'DELETE_TODO_TODOLIST',
      payload: toDoId
    }
    // dispatch
    dispatch(action);
  }

  const handleToggle = (toDoId) => {
    dispatch({
      type: 'NEW_TOGGLE_CHANGE_DONE',
      payload: toDoId
    })
  }

  const handleAddToDo = (newToDo) => {
    dispatch({
      type: 'ADD_TODO_TODOLIST',
      payload: newToDo
    })
  }

  return (
    <div>
      <h1>ToDoApp ({toDos.length})</h1>
      <hr />
      <div className='row'>
        {/* ToDoList, toDos, handleDelete, handleToggle  */}
        <ToDoList
          toDos={toDos}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
        <ToDoAdd
          handleAddToDo={handleAddToDo}
        />
      </div>
    </div>
  )
}
