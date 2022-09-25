import React, {useState} from 'react';
import {db} from '../firebase';
import {addDoc, collection} from 'firebase/firestore';
import {FormControl, Input, Button, Stack} from '@mui/material';

function AddTodo() {
    const [title, setTitle] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== '') {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
                priority: false
            });
            setTitle('');
        }
    };
  return (
    <Stack justifyContent='center' direction='row' mt={4}>
        <FormControl sx={{flexDirection: 'row', gap: '30px'}}>
            <Input 
                type="text"
                placeholder='Enter todo...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button
                onClick={handleSubmit}
            >
                Add
            </Button>
        </FormControl>
    </Stack>
  )
}

export default AddTodo