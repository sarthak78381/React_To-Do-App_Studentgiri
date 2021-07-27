import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar,Typography, Button } from '@material-ui/core'

import './header.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../redux/user/userSelector';
import { userLogOut } from '../../redux/user/userAction';

function Header({currentUser, userLogout}) {
    const handleLogout = async () => {
        const data = await fetch('users/signout');
        if (data.status === 200) return userLogout()
    }
    return (
        <div className='root'>
            <AppBar position="static" color='secondary'>
                <div className="header__container">
                    <Typography variant="h6">
                    {
                        currentUser? `${currentUser.name}`:"Guest"
                    }
                    </Typography>
                    <Button color="inherit" xs='6'>
                        {currentUser?(
                            <span onClick={handleLogout}>Logout</span>
                        ):(
                            <Link style={{all:"unset"}} to='/signin'>Login</Link>
                        )}
                    </Button>
                </div>
            </AppBar>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: getCurrentUser
})

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
