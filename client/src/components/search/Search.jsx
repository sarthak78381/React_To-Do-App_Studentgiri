import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { filterTask, getNewTask } from '../../redux/task/taskAction';
import { getUserTasks } from '../../redux/task/taskSelector';
import { TextField } from '@material-ui/core'


import './search.scss';

function Search({tasks, loadNewTask, filterTheTask}) {
    
    const [icon, showIcon] = useState(false);
    const [searchValue, changeSearchValue] = useState('');
    const [error, isError] = useState(false);

    useEffect(() => {
        if (searchValue === '') {
            showIcon(false);
            filterTheTask([]);
        };
    }, [searchValue])

    const handleChange = (e) => {
        const {value} = e.target;
        changeSearchValue(value);
        let fTasks = tasks.filter(task => task.title.includes(value));
        filterTheTask(fTasks);
        if (fTasks.length === 0) {
            showIcon(true);
        } else {
            showIcon(false);
        }
    }
    const handleSubmit = async () => {
        isError(false);
        const newTask = {title: searchValue, completed: false}
        const task = await fetch('tasks', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        if (task.status === 201) {
            const taskData = await task.json();
            loadNewTask(taskData);
            filterTheTask([]);
            changeSearchValue('')
        } else if (task.status === 400) {
            isError(true)
        }

    }

    return (
        <div className="searchBox__container">
            <div>
                <TextField id="standard-basic" label="Search Task Or Create New One" placeholder='Task Title' variant="outlined" color='secondary' InputProps={{
                    endAdornment: icon && (
                        <i className="far fa-plus-square addTask__icon" onClick={handleSubmit}></i>
                    )
                }} onChange={handleChange} name='searchValue' value={searchValue} error={error} helperText={error?"title already in use":""}/>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    tasks: getUserTasks
})

const mapDispatchToProps = (dispatch) => ({
    loadNewTask: (task) => dispatch(getNewTask(task)),
    filterTheTask: (filteredTask) => dispatch(filterTask(filteredTask))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

