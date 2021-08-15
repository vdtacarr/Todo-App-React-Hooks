import React, { useState,useEffect } from 'react'

import { TodoForm } from './TodoForm';

export const EditTodo = () =>
 {

const [todo, setTodo] = useState()

useEffect(()=>{
setTodo({
    text:"foo"
})
},[])
const onSubmit = (data) =>{
    alert(JSON.stringify(data));
}
  return (
  <div className="container">
  <div className="mt-3">
    <h3>Edit todo Item</h3>
    <TodoForm todo={todo} onSubmit ={onSubmit} />
    </div>
    </div>
    )
 }