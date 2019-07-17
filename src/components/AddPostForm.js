import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class AddPostForm extends Component {
  state = {
    title: "",
    body: "",
    author: "",
    image: ""
  }
  render() {
    return (
      <Row>
        <Col sm="10">
          <Form onSubmit={e => {
            e.preventDefault()
            this.props.newPost(this.state)
          }}>
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input onChange={e => this.setState({[e.target.name]: e.target.value})} value={this.state.title} type="text" name="title" id="title-field" />
            </FormGroup>
            <FormGroup>
              <Label for="body-field">Body</Label>
              <Input onChange={e => this.setState({[e.target.name]: e.target.value})} value={this.state.body} type="text" name="body" id="body-field" />
            </FormGroup>
            <FormGroup>
              <Label for="author-field">Author</Label>
              <Input onChange={e => this.setState({[e.target.name]: e.target.value})} value={this.state.author} type="text" name="author" id="author-field" />
            </FormGroup>
            <FormGroup>
              <Label for="image-field">Image URL</Label>
              <Input onChange={e => this.setState({[e.target.name]: e.target.value})} value={this.state.image} type="text" name="image" id="image-field" />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default AddPostForm
