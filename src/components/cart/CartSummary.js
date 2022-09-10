import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as cartActions from '../redux/actions/cartActions'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import { Cart } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'
import alertify from 'alertifyjs'


class CartSummary extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product)
        alertify.set('notifier', 'position', 'bottom-left');   
        alertify.error(product.productName + " sepetten silindi !")
       }

    renderEmpty() {
        return (
            <NavItem>
                <NavLink >Sepet Boş !</NavLink>
            </NavItem>
        )
    }
    renderSummery() {
        return(<UncontrolledDropdown nav inNavbar>
            <DropdownToggle className='d-flex align-items-center ' nav caret>
                <Cart className='m-2 fs-5'/>
                Cart
            </DropdownToggle>
            <DropdownMenu end>

                {
                    this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id} >
                            <Button className='btn-light' onClick={()=>this.removeFromCart(cartItem.product)}>X</Button>
                            {cartItem.product.productName+" : "}
                            {cartItem.quantity}
                            
                        </DropdownItem>
                    ))
                }


                <DropdownItem divider />
                <DropdownItem>
                    <Link to={'/cart'}>Go To Cart</Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>)
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummery() : this.renderEmpty()
                }

            </div>
        )
    }
}

function mapDispaschToProps(dispatch){
    return{
        actions:{
            removeFromCart:bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function MapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

export default connect(MapStateToProps,mapDispaschToProps)(CartSummary)