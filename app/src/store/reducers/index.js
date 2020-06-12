import { combineReducers } from 'redux'

const initialState = {
  tasks: [],
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return { ...state, tasks: action.payload.tasks }
    case 'ADD_TASKS':
      return {
        ...state,
        tasks: state.tasks.concat(action.payload.newTask)
      }
    case 'DELETE_TASKS':
      return { ...state, tasks: state.tasks.filter(task => task != action.payload.deletedTaskId) }
    default:
      return state
  }
}


const reducers = combineReducers({
  taskReducer
})

export default reducers