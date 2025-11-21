import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './Create';
import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { API_URL } from '../config/api';

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/get`)
      .then(result => setTodos(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios.put(`${API_URL}/update/${id}`)
      .then(result => location.reload())
      .catch(err => console.log(err));
  }

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/delete/${id}`)
      .then(result => location.reload())
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Todo List</h2>
      <Create />
      <br />
      {todos.length === 0
        ? <div><h2>No Record</h2></div>
        : todos.map(todo => (
          <div className='task' key={todo._id}>
            <div className='checkbox' onClick={() => handleEdit(todo._id)}>
              {todo.done 
                ? <BsFillCheckCircleFill className='icon' />
                : <BsCircleFill className='icon' />
              }
              <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
            </div>
            <span>
              <BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} />
            </span>
          </div>
        ))
      }
    </div>
  )
}

export default Home;