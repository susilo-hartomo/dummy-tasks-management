export const setTask = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3002/tasks')
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: "SET_TASKS",
          payload: {
            tasks: data
          }
        })
      })
  }
}

export const addTask = (newTask) => {

  return (dispatch) => {
    fetch('http://localhost:3002/tasks', {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: 'ADD_TASKS',
          payload: {
            newTask
          }
        })
      })
  }
}

export const deleteTask = () => {

}

export const filterTask = (seletedCategory) => {
  return (dispatch, getState) => {
    const currentTasks = getState().taskReducer.tasks
    const filteredTasks = currentTasks.filter(task => task.category == seletedCategory)

    dispatch({
      type: 'SET_TASKS',
      payload: {
        tasks: filteredTasks
      }
    })
  }
}