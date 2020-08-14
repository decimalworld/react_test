import React, { useState } from 'react'
import Todo from './components/todo'
import TodoForm from './components/todoForm'
import {useSelector} from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos);
  
  return (
    <div>
      <div>
        <h1> Todo List </h1>

        {todos.map((todo,index) =>(
          <Todo 
            key={index} 
            index={index}
          />
        ))}
      </div>
      <div>
        <h1>Add Todo</h1>
        <TodoForm/>
      </div>
    
    </div>
  )
}
export default App;