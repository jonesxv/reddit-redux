import { connect } from 'react-redux'
import Main from '../../components/Main';
import { newPost, fetchPosts, fetchComments, addComment, toggleForm } from '../actions'

const mapStateToProps = state => {
    return {
        posts: state.posts,
        comments: state.comments,
        addFormClass: state.addFormClass,
        filteredPosts: state.filteredPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleForm: () => {
            return dispatch(
                toggleForm()
            )
        },
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
        },
        addComment: (id, text) => {
            return dispatch(
                addComment(id, text)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);