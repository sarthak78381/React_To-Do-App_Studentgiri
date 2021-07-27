import {createSelector} from 'reselect';

const taskState = (state) => {
    return state.tasks;
}

export const getUserTasks = createSelector([taskState], (tasks) => tasks.tasks);
export const getFilteredTasks = createSelector([taskState], (tasks) => tasks.filteredTask);
