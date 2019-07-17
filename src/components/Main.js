import React, { Component } from 'react'
import AddPostForm from './AddPostForm'
import Post from './Post'
import { Container, Row, Col, Button } from 'reactstrap'
import FilterContainer from '../redux/containers/FilterContainer';

class Main extends Component {

  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchComments()
  }

  render() {
    const postsList = this.props.posts.map(post => {
      return <Post {...post} addComment={this.props.addComment} comments={this.props.comments[post.id]} />
    })
    const filteredPosts = this.props.filteredPosts.map(post => {
      return <Post {...post} addComment={this.props.addComment} comments={this.props.comments[post.id]} />
    })
    return (
      <Container className="mt-4">
        <Row>
          <Col sm={{size: 8, offset: 1}}>
            <FilterContainer />
          </Col>
          <Col sm="2">
            <Button onClick={() => this.props.toggleForm()} color="secondary">Add Post</Button>
          </Col>
        </Row>
        <Row className={`mt-4 ${this.props.addFormClass}`}>
          <Col sm={{size: 11, offset: 1}}>
            <AddPostForm newPost={this.props.newPost}/>
          </Col>
        </Row>
        <Row>
          <Col className="pr-0" sm={{size: 9, offset: 1}}>
            {this.props.filteredPosts.length > 0 ? filteredPosts : postsList}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main
