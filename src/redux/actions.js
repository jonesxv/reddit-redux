const fetch = require('node-fetch')
const request = require('request');

const postsUrl = 'http://localhost:8082/api/posts'
const commentsUrl = 'http://localhost:8082/api/comments/'

export const TOGGLE_FORM = 'TOGGLE_FORM'
export const toggleForm = () => {
    return {
        type: TOGGLE_FORM
    }
}

export const LOADING_POSTS = 'LOADING_POSTS'
export const loadingPosts = () => {
    return {
        type: LOADING_POSTS
    }
}

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
                const comments = {}
                res.forEach(comment => {
                    if (comments[comment.post_id]) {
                        comments[comment.post_id].push(comment)
                    } else {
                        comments[comment.post_id] = []
                        comments[comment.post_id].push(comment)
                    }
                })
                dispatch(sendData(comments, FETCH_COMMENTS))
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
                dispatch(toggleForm())
            })
    }
}

export const ADD_COMMENT = 'ADD_COMMENT'
export const addComment = ( id, text ) => {
    return dispatch => {
        // fetch(commentsUrl, {
        //     method: 'POST',
        //     data: JSON.stringify({
        //         "content": text,
        //         "post_id": id
        //     }),
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'Cache-Control': 'no-cache',
        //         "Accept": "*/*",
        //     }
        // })
        
            // .then(data => data.json())
            // .then(res => {
            //     console.log('comment', res)
            //     dispatch(sendData({
            //         post_id: id,
            //         content: text,
            //         id: res.id
            //     }, ADD_COMMENT))
            // })
        var options = { 
            method: 'POST',
            url: commentsUrl,
            headers: { 
                'cache-control': 'no-cache',
                Connection: 'keep-alive',
                'content-length': '44',
                'accept-encoding': 'gzip, deflate',
                Host: 'localhost:8082',
                'Postman-Token': 'b1e02983-3af5-4fe8-9074-2d203d3ff367,a060635f-c62e-443a-943d-cee0f1d01ae0',
                'Cache-Control': 'no-cache',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.13.0',
                'Content-Type': 'application/json' },
            body: { content: text, post_id: id },
            json: true 
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);
        dispatch(sendData(body, ADD_COMMENT))
        });
    }
}

export const FILTER_POSTS = 'FILTER_POSTS'
export const filterPosts = keyword => {
    return {
        type: FILTER_POSTS,
        payload: keyword
    }
}

export const UP_VOTE = 'UP_VOTE'
export const upVote = id => {
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
