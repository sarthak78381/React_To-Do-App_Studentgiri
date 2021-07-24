import React from 'react'
import { TextField } from '@material-ui/core'

import './search.scss';

export default function Search() {
    return (
        <div className="searchBox__container">
            <div>
                <TextField id="standard-basic" label="Search Task" placeholder='Task Name' variant="outlined" color='secondary'/>
            </div>
        </div>
    )
}

