import { useState, useContext } from 'react';
import { TasksDispatchContext } from './TasksContext.jsx';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  return (
    <Box sx={{display:'flex', justifyContent:'space-evenly', marginTop:'15px'}}>
      <Input placeholder='Add Task' value={text} onChange={e => setText(e.target.value)}/>
      <Button variant="text" onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        });
      }}>Add</Button>
    </Box>
  );
}

let nextId = 0;
