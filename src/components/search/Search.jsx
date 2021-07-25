import React, {useState} from 'react'
import { TextField, InputAdornment } from '@material-ui/core'
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

import './search.scss';

export default function Search() {
    
    const [icon, showIcon] = useState(false);

    return (
        <div className="searchBox__container">
            <div>
                <TextField id="standard-basic" label="Search Task Or Create New One" placeholder='Task Title' variant="outlined" color='secondary' InputProps={{
                    endAdornment: icon && (
                        <InputAdornment>
                            <AddBoxOutlinedIcon className='addTask__icon'/>
                        </InputAdornment>
                    )
                }}/>
            </div>
        </div>
    )
}

