const initialState = [{
  id: 1,
  todo: 'Encontrar un puto trabajo',
  done: false
}];

const toDoReducer = (state = initialState, action) => {

  if(action?.type === 'agregar') {
    return [...state, action.payload];
  }

  return state;

}

let todos = toDoReducer();

const newToDo = {
  id: 2,
  todo: 'adelgazar',
  done: false,
}

const agregarToDoAction = {
  type: 'agregar',
  payload: newToDo,
}

todos = toDoReducer(todos, agregarToDoAction);


console.log(todos);