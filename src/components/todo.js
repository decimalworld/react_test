import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {isComplete,removeTodo} from '../actions';
import {Card, Button} from 'antd'
import { CloseCircleOutlined, CheckOutlined } from '@ant-design/icons';

function Todo({index}){
  const todos = useSelector(state => state.todos);
  const todo = todos[index];
  const dispatch = useDispatch();
  return (
  <div>
    <Card 
      title={todo.title} 
      style={
        { width: 300, height: 150 },
        {textDecoration: todo.isCompleted ? 'line-through' : ''}
      }
      bordered={true}
    >
      <p>{todo.text}</p>
      <Button 
        type="primary" 
        shape="circle" 
        icon={<CheckOutlined />}
        onClick={() => dispatch(isComplete(index))}
      />
      <Button 
        type="primary" 
        shape="circle" 
        icon={<CloseCircleOutlined />}
        onClick={() => dispatch(removeTodo(index))}
      />
    </Card>
    <br/>
    <br/>
  </div>
  )
}

export default Todo;
