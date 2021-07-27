import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { getCurrentUser } from '../../redux/user/userSelector';

import SignIn from '../signin/SignIn';
import SignUp from '../signup/SignUp';

import './signinsignup.scss'

function SignInSignUp({currentUser}) {

    return !currentUser ? (
                <div className='signinsignup__container'>
                    <SignIn />
                    <SignUp />
                </div>
            ): (
                <Redirect to='/'/>
            );
}

const mapStateToProps = createStructuredSelector({
    currentUser: getCurrentUser
})

export default connect(mapStateToProps)(SignInSignUp)
