import React, { useState } from 'react'
import {
  useDispatch
} from 'react-redux'

import { Link } from 'react-router-dom'
import { addTask } from '../store/actions'

const NewTask = () => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("Backend")
  const dispatch = useDispatch()


  const addNewTask = () => {
    let newTask = { title, category }
    dispatch(addTask(newTask))
  }

  return (
    <>
      <h1>Create new Task</h1>
      <Link to="/">Home </Link>
      <label> Title </label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value)
        }} />
      <br />
      <br />
      <label> Category </label>
      <br />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option> Backend </option>
        <option> Frontend </option>
        <option> Mobile </option>
      </select>
      <br />
      <br />
      <button onClick={() => {
        addNewTask()
      }}> Add </button>
    </>
  )
}

export default NewTask    