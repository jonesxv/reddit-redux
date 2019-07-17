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
  Label,
  Input
} from 'reactstrap'
import { FaComment } from 'react-icons/fa'
import VoteContainer from '../redux/containers/VoteContainer';
const Post = ({ author, content, createdAt, id, img_url, inCart, title, votes, comments }) => {
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
              {createdAt} | <FaComment /> {comments ? comments.length === 1 ? `${comments.length} Comment` : `${comments.length} Comments` : '0 Comments'} 
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="text" name="comment" id="comment-field" placeholder="Enter a comment here" />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
              <ul className="mt-2">
                {comments && comments.map(comment => <li>{comment.content}</li>)}
              </ul>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Post
