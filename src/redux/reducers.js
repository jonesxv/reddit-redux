import { SAMPLE_ACTION } from './actions'

const initialState = {
    sample: false
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SAMPLE_ACTION:
            return {
                ...state,
                sample: action.payload
            }
        default:
            return state;
    }
}

export default reducer