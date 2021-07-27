
import React, {useState} from 'react'
import { useHistory } from 'react-router';
import { TextField, Button } from '@material-ui/core'
import './signup.scss'
import { connect } from 'react-redux';
import { userSignUp } from '../../redux/user/userAction';

function SignUp({userSignup}) {
    const history = useHistory();
    const [error, isError] = useState(false)
    const [signUpInfo, setSignUpInfo] = useState({
        name: '',
        userName: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSignUpInfo({
            ...signUpInfo,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        try {
            const {userName, password, name} = signUpInfo;
            if (!userName || !password || !name) return
            const user = await fetch('users/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName, password, name
                })
            });
            if (user.status === 400) {
                isError(true)
            }
            if (user.status === 201) {
                isError(false);
                const data = await user.json();
                if (user) {
                    userSignup(data)
                    history.push('/')
                }
            }
        } catch(e) {

        }
    }
    return (
        <div className='signUp__container'>
            <h2>SIGN UP</h2>
            <form>
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="Name"
                    name="name"
                    helperText={error?"Name can not be empty":""}
                    error={error}
                    color='secondary'
                    onChange={handleChange}
                    />
                <TextField
                    onChange={handleChange}
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="User Name"
                    name="userName"
                    color='secondary'
                    helperText={error?"details might already be in use":""}
                    error={error}
                    />
                <TextField
                    onChange={handleChange}
                    variant="standard"
                    helperText={error?"choose a strong Password":""}
                    error={error}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    color='secondary'
                    />
                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    color='secondary'
                >
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    userSignup: (user) => dispatch(userSignUp(user))
})

export default connect(null, mapDispatchToProps)(SignUp)

