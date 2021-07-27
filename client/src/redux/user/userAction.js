import userTypes from "./userTypes";


export const userLogIn = (user) => ({
    type: userTypes.USER_LOGIN,
    payload: {...user}
})

export const userSignUp = (user) => ({
    type: userTypes.USER_SIGNUP,
    payload: user
})

export const setCurrentUser = (user) => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

export const userLogOut = () => ({
    type: userTypes.USER_LOGOUT
})
