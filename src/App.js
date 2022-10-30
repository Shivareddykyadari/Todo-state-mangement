import './App.css';
import {useState} from 'react'
import TodoList from './TodoList';


function App() {
const [task,setTask]=useState('')
const [todos,setTodos]=useState([])

const changeHandler=(e)=>{
    setTask(e.target.value)
}
const submitHandler=e=>{
   e.preventDefault();
   console.log(task)
   const newTodos=[...todos,task];
   setTodos(newTodos);
   setTask('');
}

const deleteHandler=(indexValue)=>{
  const newTodos=todos.filter((todo,index)=>index!==indexValue)
    setTodos(newTodos)
}

  return (
    <div className="App">
        <center>
          <div className='card'>
          <div className='card-body'>
          <h2 className='card-title'>Todo Management Application</h2>
          <form onSubmit={submitHandler}>
             <input size="30" type="text" onChange={changeHandler} name='task' value={task} />&nbsp;&nbsp;
             <input type="submit" value='Add' name="Add" />
          </form>
          <TodoList todolist={todos} deleteHandler={deleteHandler} />
          </div>
          </div>
        </center>
    </div>
  );
}

export default App;
