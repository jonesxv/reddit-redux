const fetch = require('node-fetch')

const postsUrl = 'http://localhost:8082/api/posts'
const commentsUrl = 'http://localhost:8082/api/comments'
// action type
export const SAMPLE_ACTION = 'SAMPLE_ACTION'
// action creator, which returns an action
export const sampleAction = payload => {
    return {
        type: SAMPLE_ACTION,
        payload
    }
}

export const LOADING_POSTS = 'LOADING_POSTS'
export const loadingPosts = () => {
    return {
        type: LOADING_POSTS
    }
}

// export const ageUpAsnc = val => {
//     return { type: "AGE_UP", value: val };
//   };
  
//   export const ageUp = val => {
//     return dispach => {
//       dispach(loading());
//       setTimeout(() => {
//         dispach(ageUpAsnc(val));
//       }, 5000);
//     };
//   };

export const SEND_DATA = 'SEND_DATA'
export const sendData = (data,action) => {
    return {
        type: action,
        payload: data
    }
}

export const FETCH_POSTS = 'FETCH_POSTS'
export const fetchPosts = () => {
    return dispatch => {
        fetch(postsUrl)
            .then(data => data.json())
            .then(res => {
                dispatch(sendData(res, FETCH_POSTS))
            })
    }
}

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const fetchComments = () => {
    return dispatch => {
        fetch(commentsUrl)
            .then(data => data.json())
            .then(res => {
                dispatch(sendData(res, FETCH_COMMENTS))
            })
    }
}

export const NEW_POST = 'NEW_POST'
export const newPost = post => {
    return dispatch => {
        fetch(postsUrl, {
            method: 'POST',
            data: JSON.stringify(post)
        })
            .then(data => data.json())
            .then(res => {
                dispatch(sendData({
                    ...post,
                    ...res
                }, NEW_POST))
            })
    }
}

export const UP_VOTE = 'UP_VOTE'
export const upVote = id => {
    console.log(id)
    return dispatch => {
        fetch(`${postsUrl}/votes/increase/${id}`)
            .then(data => data.json())
            .then(res => {
                dispatch(sendData(res, UP_VOTE))
            })
    }
}

export const DOWN_VOTE = 'DOWN_VOTE'
export const downVote = id => {
    return dispatch => {
        fetch(`${postsUrl}/votes/decrease/${id}`)
            .then(data => data.json())
            .then(res => {
                dispatch(sendData(res, DOWN_VOTE))
            })
    }
}
