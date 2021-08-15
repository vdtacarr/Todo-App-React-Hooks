import React, { Component } from 'react'
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { TodoForm } from './TodoForm';


export const CreateTodo = () =>
 {
const {register,handleSubmit} = useForm()
const history   = useHistory()

const onSubmit = ((data)=>
{
    alert(JSON.stringify(data))
});
  return  (
    (
        <div className="container">
        <div className="mt-3">
          <h3>Edit todo Item</h3>todo?
          <TodoForm onSubmit={onSubmit} />
          </div>
          </div>
          )  );
}
