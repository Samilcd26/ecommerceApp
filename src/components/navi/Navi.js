import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav
   } from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import { Link } from 'react-router-dom';
import {PlusLg} from 'react-bootstrap-icons'


export default class Navi extends Component {
  render() {
    return (
      <div>
         <Navbar color="light" light expand="md">
          <NavbarBrand ><Link className='text-decoration-none' to="/">React-Redux</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          
            <Nav className="ml-auto" navbar>
              
              <CartSummary/>
            </Nav>
          
        </Navbar>
      </div>
    )
  }
}
