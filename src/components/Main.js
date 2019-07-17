import React, { Component } from 'react'
import AddPostForm from './AddPostForm'
import Post from './Post'
import FilterPosts from './FilterPosts'
import { Container, Row, Col, Button } from 'reactstrap'

class Main extends Component {
  state = {
    addFormClass: 'hide',
  }

  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchComments()
  }
  render() {
    const postsList = this.props.posts.map(post => {
      return <Post {...post} comments={this.props.comments[post.id]} />
    })
    return (
      <Container className="mt-4">
        <Row>
          <Col sm={{size: 8, offset: 1}}>
            <FilterPosts />
          </Col>
          <Col sm="2">
            <Button onClick={() => this.setState(prev => { 
              return {
                addFormClass: prev.addFormClass === 'hide' ? 'show' : 'hide'
              } 
            })} color="secondary">Add Post</Button>
          </Col>
        </Row>
        <Row className={`mt-4 ${this.state.addFormClass}`}>
          <Col sm={{size: 11, offset: 1}}>
            <AddPostForm newPost={this.props.newPost} showForm={this.state.showAddFrom}/>
          </Col>
        </Row>
        <Row>
          <Col className="pr-0" sm={{size: 9, offset: 1}}>
            {postsList}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main
