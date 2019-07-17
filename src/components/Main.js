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

  compareVotes = (a, b) => {
    const voteA = parseInt(a.votes)
    const voteB = parseInt(b.votes)
  
    let comparison = 0;
    if (voteA < voteB) {
      comparison = 1;
    } else if (voteA > voteB) {
      comparison = -1;
    }
    return comparison;
  }

  sortPosts = arr => {
    const posts = arr
    return posts.sort(this.compareVotes)
  }

  render() {
    const posts = this.sortPosts(this.props.posts)
    const filtered = this.sortPosts(this.props.filteredPosts)
    const postsList = posts.map(post => {
      return <Post key={`post${post.id}`} {...post} addComment={this.props.addComment} comments={this.props.comments[post.id]} />
    })
    const filteredPosts = filtered.map(post => {
      return <Post key={`filter${post.id}`} {...post} addComment={this.props.addComment} comments={this.props.comments[post.id]} />
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
            {this.props.filterKeyword.length > 0 ? filteredPosts : postsList}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main
