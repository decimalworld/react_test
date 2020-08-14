import React,{useState} from 'react'
import {addTodo} from '../actions'
import {useDispatch} from 'react-redux';
import {Button, Form, Input, Checkbox} from 'antd'

const { TextArea } = Input;

function TodoForm(){
  const [todo, setValue] = useState({
    title:'',
    text:'',
  });

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const target = event.target;
    const text = target.value;
    const name = target.name; 

    setValue({
      ...todo,
      [name]: text
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo.title) return;
    dispatch(addTodo(todo))
    setValue({
      title:'',
      text:''
    });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input your title!' }]}
        >
          <Input 
            type="text" 
            className="input"
            name = "title"
            value={todo.title} 
            placeholder="add todo title..."
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item
          label="Text"
          name="text"
        >
          <TextArea
            name = "text"
            value={todo.text}
            autoSize={{ minRows: 5, maxRows: 5 }}
            cols = {40}
            placeholder="add todo text..."
            onChange={handleInputChange}
          />
        </Form.Item>
        <Button type="primary" onClick={handleSubmit}>save</Button>
      </Form>
      
    </div>
  )
}

export default TodoForm;