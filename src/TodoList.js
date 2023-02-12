import {  Grid, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
const TodoList =({list,remove})=>{
    return(
        <>
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >

<div >
<ul >
    {list.map((entry,index)=>(
        // <div className="todo">
           <> 
           
           <li key={index}>{entry}
           {" "}
          
            <Button   variant="contained" 
            onClick={()=>{
                remove(entry);
            }}
            >Delete</Button>
           </li>

            </>
        // </div>
    ))}
</ul>
</div>


   </Grid>
</>
    );
};
export default TodoList;