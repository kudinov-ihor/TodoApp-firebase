import React, {useState} from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import {Stack, Input} from '@mui/material';

const Todo = ({todo, toggleComplete, togglePriority, handleEdit, handleDelete}) => {
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleChange = (e) => {
        e.preventDefault();
        if (todo.completed === true) {
            setNewTitle(todo.title) 
        } else {
            todo.title = '';
            setNewTitle(e.target.value);
        }
    };
  return (
    <Stack direction='row' justifyContent='center' spacing={3} mt={2}>
        <StarIcon
            cursor='pointer'
            fontSize='large'
            color={todo.priority ? 'secondary' : 'disabled' }
            id='i'
            onClick={() => togglePriority(todo)}
            
        />
        <Input 
            type='text'
            value={todo.title === "" ? newTitle : todo.title}
            onChange={handleChange}
        />
        <CheckCircleIcon
            cursor='pointer'
            fontSize='large'
            onClick={() => toggleComplete(todo)}
            id='i'
        />
        <EditIcon
            cursor='pointer'
            fontSize='large'
            onClick={() => handleEdit(todo, newTitle)}
            id='i'
        />
        <DeleteIcon
            cursor='pointer'
            fontSize='large'
            onClick={() => handleDelete(todo.id)}
            id='i'
        />
    </Stack>
  )
}

export default Todo