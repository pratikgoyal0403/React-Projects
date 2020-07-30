import * as actionTypes from '../actions/actiontypes';

const initialState = {
    posts: [],
    currentUserPosts: [],
}

const postReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_POST:
            return{
                posts: action.posts
            }
        case actionTypes.USER_POSTS:
            return{
                currentUserPosts: action.posts
            }
        case actionTypes.POST_CREATION_SUCCESSFUL:
            return{
                ...state,
                posts: state.posts.concat(action.post)
            }
        case actionTypes.POST_CREATION_FAILED:
            return state;
        case actionTypes.ADD_COMMENT:
            const index = state.posts.findIndex(p => p._id.toString() === action.updatedPost._id.toString());
            const updatedPosts = state.posts.filter(p=> p);
            updatedPosts[index] = {...action.updatedPost}
            return {
                ...state, 
                posts: updatedPosts
            }
        default:
            return state;
    }
}

export default postReducer;