import taskTypes from "./taskTypes";


export const getCurrentUserTask = (tasks) => ({
    type: taskTypes.GET_CURRENT_USER_TASK,
    payload: tasks
})

export const getNewTask = (task) => ({
    type: taskTypes.GET_NEW_TASK,
    payload: task
})

export const updateTask = (task, update) => ({
    type: taskTypes.UPDATE_TASK,
    payload: {task, update}
})

export const removeTask = (task) => ({
    type: taskTypes.REMOVE_TASK,
    payload: task
})

export const changeCompletionOfTask = (task) => ({
    type: taskTypes.CHANGE_COMPLETION_OF_TASK,
    payload: task
})

export const filterTask = (filteredTask) => ({
    type: taskTypes.FILTER_TASK,
    payload: filteredTask
})