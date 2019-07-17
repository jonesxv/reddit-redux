import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap'

export default class Example extends React.Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Reddit Clone</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar />
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
