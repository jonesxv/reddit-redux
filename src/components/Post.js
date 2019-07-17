import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap'
import { FaComment } from 'react-icons/fa'
import VoteContainer from '../redux/containers/VoteContainer';
import moment from 'moment';
class Post extends React.Component {
  state = {
    showComment: 'hide'
  }

  handleClick = () => {
    this.setState(prevState => {
      return {showComment: prevState.showComment === 'hide' ? 'show' : 'hide'}
    })
  }
  render() {
    const { author, content, createdAt, id, img_url, title, votes, comments, addComment } = this.props

    return (
      <Row className="mt-3">
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src={img_url}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{title} | 
              <VoteContainer votes={votes} id={id} />
              </CardTitle>
              <CardSubtitle>{author}</CardSubtitle>
              <CardText>
                {content}
              </CardText>
                <hr />
                {moment(createdAt).fromNow()} | <FaComment onClick={() => this.handleClick()}/> <div className="inline" onClick={() => this.handleClick()}>{comments ? comments.length === 1 ? `${comments.length} Comment` : `${comments.length} Comments` : '0 Comments'} </div>
                <Form onSubmit={e => {
                  e.preventDefault()
                  addComment(id, e.target.comment.value)}} inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here" />
                  </FormGroup>
                  <Button>Submit</Button>
                </Form>
                <ul className={`mt-2 ${this.state.showComment}`}>
                  {comments && comments.map(comment => <li key={comment.id}>{comment.content}</li>)}
                </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
  
}

export default Post
