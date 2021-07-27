import {all, call} from "redux-saga/effects";

import {TaskSaga} from './task/task.saga';


export function* rootSaga() {
    yield all([
        call(TaskSaga),
        // call(userSaga),
    ])
}


export default rootSaga;