import React, {useState} from 'react';
import { useHistory } from 'react-router';
import {connect} from 'react-redux';
import { TextField, Button } from '@material-ui/core'

import './signin.scss';
import { userLogIn } from '../../redux/user/userAction';

function SignIn({userLogin}) {
    const history = useHistory()
    const [error, isError] = useState(false);
    const [signInInfo, setSignInInfo] = useState({
        userName: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSignInInfo({
            ...signInInfo,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        try {
            const {userName, password} = signInInfo;
            if (!userName || !password) return
            const user = await fetch('users/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName, password
                })
            });
            if (user.status === 400) {
                isError(true)
            }
            if (user.status === 200) {
                isError(false)
                const data = await user.json();
                userLogin({...data});
                history.push('/')
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='signIn__container'>
            <h2>SIGN IN</h2>
            <form method="POST">
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="User Name"
                    name="userName"
                    color='secondary'
                    onChange={handleChange}
                    helperText={error?"invalid details":""}
                    error={error}
                    />
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    color='secondary'
                    onChange={handleChange}
                    helperText={error?"invalid details":""}
                    error={error}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color='secondary'
                    onClick={handleSubmit}
                >
                    Sign In
                </Button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    userLogin: (user) => dispatch(userLogIn(user))
})

export default connect(null, mapDispatchToProps)(SignIn);
