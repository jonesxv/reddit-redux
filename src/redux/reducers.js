import { NEW_POST, LOADING_POSTS, FETCH_POSTS, UP_VOTE, DOWN_VOTE, FETCH_COMMENTS } from './actions'

const initialState = {
    posts: [],
    comments: [],
    error: false,
    loading: false
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case FETCH_COMMENTS:
            const commentsObj = {}
            action.payload.forEach(comment => {
                if (commentsObj[comment.post_id]) {
                    commentsObj[comment.post_id].push(comment)
                } else {
                    commentsObj[comment.post_id] = []
                    commentsObj[comment.post_id].push(comment)
                }
            })
            return {
                ...state,
                comments: commentsObj
            }
        case NEW_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            }
        case UP_VOTE:
            return {
                ...state,
                posts: state.posts.map(post => {
                    return post.id === action.payload.id ? action.payload : post
                })
            }
        case DOWN_VOTE:
            return {
                ...state,
                posts: state.posts.map(post => {
                    return post.id === action.payload.id ? action.payload : post
                })
            }
        default:
            return {...state}
    }
}

export default reducer