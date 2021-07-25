import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


import './eachtask.scss';

export default function EachTask({message}) {
    const [checked, isChecked] = useState(false);
    return (
        <Paper className='task__container' style={{backgroundColor: checked ? "#f6f6f6":"#fff"}}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                    <FormControlLabel control={<Checkbox checked={checked} onChange={() => isChecked(!checked)} />} label={message} className='taskMessage__container'/>
                </Grid>
                <Grid item>
                    <Button>
                        <EditOutlinedIcon/>
                    </Button>
                </Grid>
                <Grid item>
                    <Button>
                        <DeleteOutlinedIcon/>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
