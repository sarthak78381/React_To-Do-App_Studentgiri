import React from 'react'

import { AppBar,Typography, Button } from '@material-ui/core'

import './header.scss';

export default function Header() {
    return (
        <div className='root'>
            <AppBar position="static" color='secondary'>
                <div className="header__container">
                    <Typography variant="h6">
                    Sarthak
                    </Typography>
                    {window.innerWidth > 800 && (<Typography variant='h5'>TODO APP</Typography>)}
                    <Button color="inherit">Login</Button>
                </div>
            </AppBar>
        </div>
    )
}
