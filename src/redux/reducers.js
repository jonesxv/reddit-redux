import { NEW_POST, FETCH_POSTS, UP_VOTE, DOWN_VOTE, FETCH_COMMENTS, ADD_COMMENT, TOGGLE_FORM, FILTER_POSTS } from './actions'

const initialState = {
    posts: [],
    comments: [],
    error: false,
    loading: false,
    addFormClass: 'hide',
    filterKeyword: '',
    filteredPosts: []
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FORM:
            return {
                ...state,
                addFormClass: state.addFormClass === 'hide' ? 'show' : 'hide'
            }
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
        case FILTER_POSTS:
            return {
                ...state,
                filterKeyword: action.payload.toLowerCase(),
                filteredPosts: state.posts.filter(post => {
                    if (post.title) {
                        const title = post.title.toLowerCase()
                        return title.includes(action.payload)
                    } else {
                        return false
                    }
                })
            }
        case NEW_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ],
                filterKeyword: ''
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: {
                    ...state.comments, 
                    [action.payload.post_id]: state.comments[action.payload.post_id] ? [...state.comments[action.payload.post_id], action.payload] : [action.payload]
                }
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