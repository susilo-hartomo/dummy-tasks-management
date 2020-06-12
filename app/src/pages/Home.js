import React, { useEffect, useState } from 'react'

import {
  useDispatch,
  useSelector
} from 'react-redux'

import { Link } from 'react-router-dom'
import { setTask, filterTask } from '../store/actions'


const Home = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.taskReducer.tasks)

  useEffect(() => {

    dispatch(setTask())

  }, [])

  const doFilter = (e) => {
    const selectedCategory = e.target.value
    dispatch(filterTask(selectedCategory))
  }


  return (
    <>
      this is Home
      <Link to="/create-task"> Create new </Link>
      <select onChange={doFilter}>
        <option> Backend </option>
        <option> Frontend </option>
        <option> Mobile </option>
      </select>
      <p>
        {tasks.map(task => {
          return <li key={task.id}>{task.title}  </li>
        })}
      </p>
    </>
  )
}

export default Home