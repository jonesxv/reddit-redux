import { connect } from 'react-redux'
import Main from '../../components/Main';
import { newPost, fetchPosts, fetchComments } from '../actions'

const mapStateToProps = state => {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => {
            return dispatch(
                fetchPosts()
            )
        },
        fetchComments: () => {
            return dispatch(
                fetchComments()
            )
        },
        newPost: post => {
            return dispatch(
                newPost(post)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);