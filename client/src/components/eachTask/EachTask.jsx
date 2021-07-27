import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


import './eachtask.scss';
import { connect } from 'react-redux';
import { changeCompletionOfTask, removeTask, updateTask } from '../../redux/task/taskAction';

function EachTask({message, updateTheTask, deleteTheTask, changeTaskCompletion}) {
    const [checked, isChecked] = useState(false);
    const [update, changeUpdate] = useState(false);
    let updatedMessage = '';
    return (
        <Paper className='task__container' style={{backgroundColor: checked ? "#f6f6f6":"#fff"}}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                    <div className="taskMessage__container">
                        <Checkbox checked={checked} onChange={() => isChecked(!checked)} onClick={() => 
                            changeTaskCompletion({title: message})
                        } disabled={update}/>
                        {update ? (
                            <input type="text" className='updateTask__input' onChange={(e) => {
                                updatedMessage = e.target.value;
                            }}/>
                        ):(
                            <p>{message}</p>
                        )}
                    </div>
                </Grid>
                <Grid item>
                    <Button onClick={() => {
                        if (update) {
                            updateTheTask({title: message}, updatedMessage);
                            return changeUpdate(!update);
                        }
                        return changeUpdate(!update)
                    }} disabled={checked}>
                        <EditOutlinedIcon/>
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={() => deleteTheTask({title: message})}>
                        <DeleteOutlinedIcon/>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

const mapDispatchToProps = (dispatch) => ({
    updateTheTask: (task, update) => dispatch(updateTask({...task}, update)),
    deleteTheTask: (task) => dispatch(removeTask(task)),
    changeTaskCompletion: (task) => dispatch(changeCompletionOfTask(task))
})

export default connect(null, mapDispatchToProps)(EachTask)
