import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { filterTask, getNewTask } from '../../redux/task/taskAction';
import { getUserTasks } from '../../redux/task/taskSelector';
import { TextField } from '@material-ui/core'


import './search.scss';

function Search({tasks, newTask, filterTheTask}) {
    
    const [icon, showIcon] = useState(false);
    const [searchValue, changeSearchValue] = useState('');

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

    return (
        <div className="searchBox__container">
            <div>
                <TextField id="standard-basic" label="Search Task Or Create New One" placeholder='Task Title' variant="outlined" color='secondary' InputProps={{
                    endAdornment: icon && (
                        <i className="far fa-plus-square addTask__icon" onClick={() => {
                            newTask({title: searchValue, completed: false});
                            filterTheTask([]);
                            changeSearchValue('')
                        }}></i>
                    )
                }} onChange={handleChange} name='searchValue' value={searchValue}/>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    tasks: getUserTasks
})

const mapDispatchToProps = (dispatch) => ({
    newTask: (task) => dispatch(getNewTask(task)),
    filterTheTask: (filteredTask) => dispatch(filterTask(filteredTask))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

