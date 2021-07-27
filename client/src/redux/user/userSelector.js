import {createSelector} from 'reselect';

const userState = (state) => {
    return state.users;
}

export const getCurrentUser = createSelector([userState], (users) => users.user?.user);
