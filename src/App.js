import React from 'react'

import Search from './components/search/Search'
import Header from './components/header/header'
import TaskContainer from './components/taskContainer/TaskContainer'

import { Typography} from '@material-ui/core'

import './App.css'

export default function App() {
    return (
        <div className='body__container'>
            <Header />
            {window.innerWidth > 800 ? (<Typography variant='h3' color='secondary' className='app__name'>Todo App</Typography>):(<Typography variant='h5' color='secondary' className='app__name'>Todo App</Typography>)}
            <Search/>
            <TaskContainer/>
        </div>
    )
}
