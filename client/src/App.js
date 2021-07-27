import React, {useEffect} from 'react'

import { useHistory } from 'react-router'
import HomePage from './components/HomePage/HomePage'
import SignInSignUp from './components/signin&signup/SignInSignUp'
import Header from './components/header/header'
import { Switch, Route } from 'react-router'
import { Typography} from '@material-ui/core'
import { setCurrentUser } from './redux/user/userAction';

import './App.css'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { getCurrentUser } from './redux/user/userSelector'

function App({logUser, currentUser}) {
    const history = useHistory();

    useEffect(() => {
        const getCurrentUser = async () => {
            if (!currentUser) {
                let user = await fetch('users/me');
                let data = await user.json();
                logUser(data);
            }
        }
        getCurrentUser();
    }, [currentUser])
    return (
        <div className='body__container'>
            <Header />
            {window.innerWidth > 800 ? (<Typography variant='h3' color='secondary' className='app__name'>Todo App</Typography>):(<Typography variant='h5' color='secondary' className='app__name'>Todo App</Typography>)}
            <Switch>
                <Route exact path='/' component = {HomePage} />
                <Route path='/signin' component = {SignInSignUp}/>
            </Switch>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    logUser: (user) => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
    currentUser: getCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
