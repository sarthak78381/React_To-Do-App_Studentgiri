
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getFilteredTasks, getUserTasks } from '../../redux/task/taskSelector';

import EachTask from '../eachTask/EachTask';

import './taskcontainer.scss';  

function TaskContainer({tasks, filterTask}) {
    return (
        <div className='tasks__container'>
            {filterTask.length === 0 && tasks.length === 0 && (
                <h6>Add Todays Tasks to complete</h6>
            )}
            {filterTask.length !== 0 && filterTask.map(tasks => (
                <EachTask key={tasks.title} message={tasks.title}/>
            ))}
            {filterTask.length === 0 && tasks.length !== 0 &&  tasks.map(tasks => (
                <EachTask key={tasks.title} message={tasks.title}/>
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    tasks: getUserTasks,
    filterTask: getFilteredTasks
})

export default connect(mapStateToProps)(TaskContainer)
