import AddTask from './AddTask.jsx';
import { TasksProvider } from './TasksContext.jsx';
import {useState, useRef} from 'react' ;
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import CheckboxList from './ListTasks.jsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

export default function TaskApp() {
  const [cardList, setcardList] = useState([0]) ;
  const countRef = useRef(1) ;
  return (
    <Box>
      <Box sx={{display : 'flex', justifyContent:'center', flexDirection: 'row',flexWrap: 'wrap',alignItems : 'center'}}>
        {cardList.map((c) => {
          return (
            <Paper key = {c} elevation={3} sx={{margin:2}}>
              <Card key = {c} cardList = {cardList} setcardList = {setcardList} index = {c}/>
            </Paper>
          )
        })}
      </Box>
      <Fab
          onClick = {() => {
            setcardList([countRef.current, ...cardList]) ;
            countRef.current++ ;
          } }
          color="primary"
          aria-label="add"
          size="large"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          <AddIcon size="large" />
        </Fab>
    </Box>
  );
}

function Card({cardList, setcardList, index}) {
  function handleDelete() {
     let obj = cardList.filter((c) => {
            if(c !== index) return true ;
          }) ;
      setcardList([...obj]) ;
  }
  return (
    <Box sx={{margin : '5px 5px 5px 5px',border: '5px',borderRadius: '5px',padding : '10px 10px 10px 10px',display : 'flex',flexDirection: 'column'}}>
      <TasksProvider>
        <TodoTitle/>
         <AddTask />
        <CheckboxList/>
        <Box sx={{display:'flex', justifyContent:'center'}}>
          <IconButton onClick={handleDelete} aria-label="delete" size="medium" sx={{display:'block',width:'50px', height:'50px'}}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </TasksProvider>
    </Box>
  ); 
}

function TodoTitle() {
  const [titleText, settitleText] = useState('') ;
  let titleContent = (
      <Input value = {titleText} placeholder='Add Title' onChange = {(e) => settitleText(e.target.value)} sx={{fontWeight:'bold', fontSize: '25px' }} />
  );
  return (
    <Box sx={{ display: 'flex',position: 'relative',justifyContent: 'space-between',flexWrap: 'wrap'}}>
    {titleContent}
    </Box>
  )
}

