import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { getCurrentUser } from '../../redux/user/userSelector'
import Search from '../search/Search'
import TaskContainer from '../taskContainer/TaskContainer'

function HomePage({currentUser}) {
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

export default connect(mapStateToProps)(HomePage)
