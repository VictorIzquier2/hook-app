

export const toDoReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_TODO_TODOLIST':
      return [...state, action.payload];

    case 'DELETE_TODO_TODOLIST':
      return state.filter(toDo => toDo.id !== action.payload);
  
    case 'TOGGLE_CHANGE_DONE':
      return state.map(toDo => {
        if(toDo.id === action.payload){
          return {
            ...toDo,
            done: !toDo.done
          }
        }else {
          return toDo
        }
      })

    case 'NEW_TOGGLE_CHANGE_DONE':
      return state.map(toDo => (
        (toDo.id === action.payload)
        ? {...toDo, done: !toDo.done}
        : toDo
      ))

    default:
      return state;
  }

}