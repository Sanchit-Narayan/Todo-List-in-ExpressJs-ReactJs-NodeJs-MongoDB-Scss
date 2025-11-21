import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/api';

function Create() {
  const [task, setTask] = useState('');
  const handleAdd = () => {
    axios.post(`${API_URL}/add`, { task: task })
      .then(() => location.reload())
      .catch(err => console.log(err));
  }
  return (
    <div className='create_form'>
      <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>Create</button>
    </div>
  )
}

export default Create;