import React from 'react';
import {useForm} from '../../hooks/useForm';

export const ToDoAdd = ({handleAddToDo}) => {

  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    
    e.preventDefault();

    if(description.trim().length <= 1){
      return;
    }

    const newToDo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    }

    handleAddToDo(newToDo);
    reset();

  }

  return (
    <div className='col-5'>
      <h4>Agregar ToDo</h4>
      <hr/>
      <form
      onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='form-control'
          name='description'
          placeholder='Aprender...'
          autoComplete='off'
          value={description}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='btn btn-outline-primary mt-1 col-12'
        >Agregar</button>
      </form>
    </div>
  )
}
