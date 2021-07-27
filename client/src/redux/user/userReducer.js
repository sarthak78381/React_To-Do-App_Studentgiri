import userTypes from './userTypes';


const INITIAL_STATE = {
    user: undefined
};


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userTypes.USER_SIGNUP:
        case userTypes.USER_LOGIN:
        case userTypes.SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }

        case userTypes.USER_LOGOUT:
            return {
                ...state,
                user: undefined
            }
            
        default:
            return{
                ...state
            }
    }
}

export default userReducer;

