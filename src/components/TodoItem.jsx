import React from 'react'
import { toast } from 'react-toastify'

const TodoItem = ({todo, deleteTodo, id}) => {
  return (
    <div  className='todo-item'>
     <p>{todo}</p>
     <i class ='fas fa-times-circle' onClick={() =>{
        deleteTodo(id)
        toast.error('Todo Deleted!')
     }}></i>
    </div>
  )
}

export default TodoItem