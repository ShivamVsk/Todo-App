import { useContext } from 'react';
import { TasksContext, TasksDispatchContext } from './TasksContext.jsx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ClearIcon from '@mui/icons-material/Clear';
import Input from '@mui/material/Input';

export default function CheckboxList() {
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  const handleToggle = (task) => () => {
   dispatch({
            type: 'changed',
            task: {
              ...task,
              done: !task.done
            }
          });
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {tasks.map((task) => {
        const labelId = `checkbox-list-label-${task.id}`;
        const labelValue = `${task.text}`;
        const isChecked = task.done;
        const SelectionIcon = isChecked ? CheckBoxIcon : CheckBoxOutlineBlankIcon;

        return (
          <ListItem
            key={task.id}
            secondaryAction={
                <IconButton onClick = {() => dispatch({type:'deleted', id:task.id})} size = "small" edge="end" aria-label={`see comments for ${labelValue}`}>
                        <ClearIcon />
                </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role="checkbox"
              aria-checked={isChecked}
              aria-labelledby={labelId}
              dense
            >
              <ListItemIcon >
                <SelectionIcon
                  onClick={handleToggle(task)}
                  sx={{
                    color: isChecked ? 'primary.main' : 'text.secondary',
                    padding: '9px',
                    marginLeft: '-12px',
                    boxSizing: 'content-box',
                  }}
                />
              </ListItemIcon>
              <Input placeholder='Task' value={task.text} onChange={e => {
                    console.log(e.target.value) ;
                    dispatch({
                    type: 'changed',
                    task: {
                        ...task,
                        text: e.target.value
                    }
                    });
                }}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}