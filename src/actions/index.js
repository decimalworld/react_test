export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo,
  };
}

export const removeTodo = (index) => {
  return{
    type: 'REMOVE_TODO',
    index
  };
}

export const isComplete = (index) => {
  return {
    type: 'COMPLETE',
    index
  };
}