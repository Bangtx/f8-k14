import './App.css'
import {
  Box,
  Button,
  TextField,
  List,
  ListItem,
  IconButton,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Checkbox
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import {cloneElement, useEffect, useState} from 'react'
import {get} from './utils/index.js'


function App() {
  const [inputting, setInputting] = useState({
    id: null,
    title: null,
    completed: false
  })
  const [todos, setTodos] = useState([])

  const getTodos= async () => {
    const data = await get('todos')
    setTodos(data)
  }

  const onSave = () => {
    if (inputting.id) {
      console.log('update')
    } else {
      console.log('create')
    }
  }

  const onChangeStatus = (todo) => {
    const index = todos.findIndex(t => t.id === todo.id)
    console.log(todos, todo.id)
    todos[index].completed = !todos[index].completed
    setTodos([...todos])
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <Box>
      <Box sx={{padding: 1}}>
        <TextField
          fullWidth={true}
          size={'small'}
          label={'todo'}
          value={inputting.title || ''}
          onChange={(e) => setInputting({...inputting, title: e.target.value})}
        />
        <Button sx={{marginTop: 1}} fullWidth variant={'outlined'} onClick={onSave}>Save</Button>
      </Box>

      <Box>
        <List>
          {
            todos.map((todo) => {
              return (
                <ListItemButton disableRipple key={todo.id} role={undefined} onClick={() => onChangeStatus(todo)} dense>
                  <ListItemIcon>
                    <Checkbox
                      checked={todo.completed}
                      edge="start"
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>

                  <ListItem
                    sx={{padding: 0}}
                    secondaryAction={
                      <>
                          <CreateOutlinedIcon color={'success'} onClick={(e) => {
                            e.stopPropagation(); // 👈 Prevent the ListItemButton's onClick
                            // onChangeStatus(todo)
                          }}/>
                          <DeleteIcon color={'error'}/>
                      </>
                    }
                  >
                    <ListItemText
                      primary={todo.title}
                    />
                  </ListItem>
                </ListItemButton>
              )
            })
          }
        </List>
      </Box>
    </Box>
  )
}

export default App
