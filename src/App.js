import './App.css';
import {useState} from "react";
import TodoInput from './TodoInput';
import TodoList from './TodoList';



function App() {
  // return (
  //   <div className="App">
  //     <h1>React Todo App</h1>
  //      <div className="input-wrapper">
  //       <input type="text" name="todo" placeholder="Create a new todo"
  //       onChange={(e)=>{setTodo(e.tartget.value)}}
  //       ></input>
  //         <button className="add-button" onClick={addTodo}> ADD</button>
  //      </div>
  //   </div>
  // );
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    // if(todo !==""){
      setTodos([...todos, todo]);
       setTodo([]);
    // }
  };
  const deleteTodo=(text) =>{
      const newTodos=todos.filter((todo)=>{
          return todo!==text;
      });
      setTodos(newTodos);
  }


return(
  
  <div className='App'>
    <h1>React Todo App</h1>
    <TodoInput todo={todo} setTodo ={setTodo} addTodo={addTodo}/>

    <TodoList list={todos} remove={deleteTodo}/>
  </div>
);
}

export default App;
