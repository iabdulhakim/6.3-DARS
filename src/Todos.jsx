import React from 'react'

const Todo = ({id, text, completed, handleCompleted, handleDelete }) => {
    return <div>
    <li 
    onClick={() => handleCompleted(id)}
    style={{textDecoration:completed ? "line-through" : "none",
    }}
    >
    {text}</li>
        
    </div>
}

export default Todo;