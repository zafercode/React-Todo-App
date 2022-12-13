import { TornadoSharp } from '@mui/icons-material'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const TodoForm = ({setTodos, todos}) => {
    const [todoValue, setTodoValue] = useState('')

    const handleSubmit = (e) =>{
        if(todoValue === ''){
            toast.error('Please enter a todo!')
        }
        else if(todos.includes(todoValue)){
            toast.error('Todo already exists!')
        }
        else if(todoValue.length < 3){
            toast.error('Todo must be at least 3 characters long!')
        }
        else{
            const newTodo = todoValue.trim()
            setTodos([...todos, newTodo])
            toast.success('Todo added!')
        }


    }

  return (
    <div>
        <form action='' id='todo-form'>
            <input type='text' id='form-input' placeholder='Please Enter Your Todo' onChange={(e) => setTodoValue(e.target.value)} value={todoValue}/>
            <button onClick={(e) =>{
                e.preventDefault()
                handleSubmit()
                setTodoValue('')
            }}>
                <i class="fas fa-plus"></i>
            </button>
        </form>
    </div>
        )  
    }

export default TodoForm