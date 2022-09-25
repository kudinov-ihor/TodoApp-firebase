import React, {useState, useEffect} from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Title from './components/Title';
import Todo from './components/Todo';
import {collection, query, onSnapshot, doc, updateDoc, deleteDoc} from 'firebase/firestore';
import {db} from './firebase';
import {CssBaseline, Container} from '@mui/material';
import Filter from './components/Filter';


function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({...doc.data(), id: doc.id});
      });
      setTodos(todosArray);
    });

    return () => unsub();
     
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, 'todos', todo.id), {title: title});
  };

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    }); 
  };

  const togglePriority = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      priority: !todo.priority
    })
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  }

  const onFilter = (value) => {
    setFilter(value);
  }


  return (
    <Container justifyContent='center'>
      <CssBaseline/>
      <Title />
      <AddTodo/>
      <Filter onFilter={onFilter}/>
      {todos
        .filter((todo) => filter ? todo.priority === true : todo)
        .map((todo)=> (
            <Todo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              togglePriority={togglePriority}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
    </Container>

    
  );
}

export default App;
