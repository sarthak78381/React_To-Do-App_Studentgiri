import taskTypes from './taskTypes';


const INITIAL_STATE = {
    tasks: [],
    filteredTask: []
};

const updateTask = (tasks, task, update) => {
    if (!update || !task) return tasks;
    let taskIndex = -1
    tasks.forEach((etask, idx) => {
        if (etask.title === task.title) {
            taskIndex = idx;
        }
    })
    if (taskIndex !== -1) {
        let statetask = tasks[taskIndex];
        statetask.title = update;
        tasks[taskIndex] = statetask;
    }
    return [...tasks];
}

const removeTask = (tasks, task) => {
    if (!task) return tasks
    let taskIndex = -1
    tasks.forEach((etask, idx) => {
        if (etask.title === task.title) {
            taskIndex = idx;
        }
    })
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1)
    }
    return [...tasks];
}

const changeCompletionOfTask = (tasks, task) => {
    if (!task) return tasks
    let taskIndex = -1
    tasks.forEach((etask, idx) => {
        if (etask.title === task.title) {
            taskIndex = idx;
        }
    })
    if (taskIndex !== -1) {
        let stateTask = tasks[taskIndex];
        stateTask.completed = !stateTask.completed;
        tasks[taskIndex] = stateTask;
        console.log(tasks[taskIndex])
    }
    return [...tasks];
}



const taskReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case taskTypes.GET_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case taskTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: removeTask(state.tasks, action.payload)
            }
        case taskTypes.UPDATE_TASK:
            return {
                ...state,
                tasks: updateTask(state.tasks, action.payload.task, action.payload.update)
            }
        case taskTypes.CHANGE_COMPLETION_OF_TASK:
            return {
                ...state,
                tasks: changeCompletionOfTask(state.tasks, action.payload)
            }
        case taskTypes.FILTER_TASK:
            return{
                ...state,
                filteredTask: [...action.payload]
            }
        default:
            return{
                ...state
            }
    }
}

export default taskReducer;

