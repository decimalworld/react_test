const todos = (state =[
  {
    title: 'Todo 1',
    text: 'Todo things 1',
    isCompleted: false,
  },
  {
    title: 'Todo 2',
    text: 'Todo things 2',
    isCompleted: false,
  },
  {
    title: 'Todo 3',
    text: 'Todo things 3',
    isCompleted: true,
  },
  {
    title: 'This guys is from redux :(',
    text: 'Todo things 4',
    isCompleted: false,
  }
], action) => {

  const createTodo = (todo) => {
    const newTodos = [...state,todo];
    return newTodos;
  }
  
  const deleteTodo = index => {
    let newTodos = []
    for (let i = 0; i < state.length; i++){
      if (i!=index)
        newTodos = [...newTodos,state[i]]
    }
    return newTodos
  }

  const completeTodo = index => {
    const newTodos = [...state];
    newTodos[index].isCompleted = true;
    return newTodos
  }

  switch(action.type){
    case 'ADD_TODO':
      return createTodo(action.todo)
    case 'REMOVE_TODO':
      return deleteTodo(action.index)
    case 'COMPLETE':
      return completeTodo(action.index)
    default:
      return [...state]
  }
}

export default todos;