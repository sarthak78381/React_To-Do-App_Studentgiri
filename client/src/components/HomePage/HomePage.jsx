import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { getCurrentUserTask } from '../../redux/task/taskAction'
import { getCurrentUser } from '../../redux/user/userSelector'
import Search from '../search/Search'
import TaskContainer from '../taskContainer/TaskContainer'

function HomePage({currentUser, logUser, logUserTask}) {
    useEffect(() => {
        const getCurrentUserTask = async () => {
            try {
                let userTask = await fetch('tasks');
                const taskData = await userTask.json();
                logUserTask(taskData)
            } catch(e) {
                return
            }
        }
        getCurrentUserTask();
    })

    return (
        <div>
            {
                currentUser ? (
                    <>
                        <Search />
                        <TaskContainer />
                    </>
                ) : (
                    <Redirect to='/signin'/>
                )
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: getCurrentUser
})

const mapDispatchToProps = dispatch => ({
    logUserTask: (tasks) => dispatch(getCurrentUserTask(tasks))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
