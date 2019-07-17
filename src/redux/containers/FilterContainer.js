import { connect } from 'react-redux'
import { filterPosts } from '../actions'
import FilterPosts from '../../components/FilterPosts';

const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterPosts: keyword => {
            return dispatch(
                filterPosts(keyword)
            )
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPosts);