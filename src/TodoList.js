import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
  return (
    <div>
      {todolist.map((todo,i)=>
      <div key={i}>
        <h5>{todo} &nbsp;&nbsp; <button onClick={()=>deleteHandler(i)}>Delete</button></h5>
      </div>)}
    </div>
  )
}

export default TodoList