import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';

const TodoInput=({todo,setTodo,addTodo})=>{
    return(
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
               <div >
                <TextField  name="todo" placeholder="Create a new todo"
                onChange={(e)=>{setTodo(e.target.value)}}
                ></TextField>
              
                  <Button  variant="contained" color='success' className="add-button" onClick={addTodo}> ADD</Button>
               </div>
               </Grid>
    );
        };
export default TodoInput;