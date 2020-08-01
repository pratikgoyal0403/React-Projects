import * as actionTypes from '../actions/actiontypes';

const initialState = {
   username: '',
   userInfo: '',
    userId: '',
    isAuth: false,
    error: null
}

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                isAuth: true,
                userId: action.userInfo._id,
                userInfo: action.userInfo,
                username: action.userInfo.username
            }
        case actionTypes.LOGIN:
            return {
                ...state,
                userId: action.user._id,
                userInfo: action.user,
                isAuth: true,
                error: null
            }
        case actionTypes.SIGNUP:
            return state;
        case actionTypes.UPDATE_USER_PROFILE:
            return{
                ...state,
                userInfo: action.updatedUser,
            }
        case actionTypes.SHOW_ERROR:
            return{
                ...state,
                error: action.message
            }
        default:
            return state;
    }
}

export default userReducer;