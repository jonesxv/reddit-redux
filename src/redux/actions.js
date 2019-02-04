// action type
export const SAMPLE_ACTION = 'SAMPLE_ACTION'
// action creator, which returns an action
export const sampleAction = payload => {
    return {
        type: SAMPLE_ACTION,
        payload
    }
}