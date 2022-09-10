import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as cartActions from '../redux/actions/cartActions'
import { Button, Table } from 'reactstrap';
import alertify from 'alertifyjs'




class CartDetail extends Component {

    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.set('notifier', 'position', 'bottom-left');
        alertify.error(product.productName + " sepetten silindi !")
    }



    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.cart.map(cartItem => (
                            <tr>
                                <th scope="row">{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td><Button onClick={() => this.removeFromCart(cartItem.product)}>-</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )

    }
}

function mapDispaschToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function MapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

export default connect(MapStateToProps, mapDispaschToProps)(CartDetail)