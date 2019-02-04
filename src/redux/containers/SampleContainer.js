import { connect } from 'react-redux'
import SampleComponent from '../../components/SampleComponent'
import { sampleAction } from '../actions'

const mapStateToProps = state => {
    console.log(state.sample)
    return {
        sample: state.sample
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sampleAction: sampleBool => {
            dispatch(
                sampleAction(sampleBool)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent)