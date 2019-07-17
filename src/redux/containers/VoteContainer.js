import { connect } from 'react-redux'
import Vote from '../../components/Vote';
import { upVote, downVote } from '../actions'

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        upVote: id => {
            return dispatch(
                upVote(id)
            )
        },
        downVote: id => {
            return dispatch(
                downVote(id)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote);