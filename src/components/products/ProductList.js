import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Button } from 'reactstrap'
import * as productActions from '../redux/actions/productActions'
import { bindActionCreators } from 'redux'
import * as cartActions from '../redux/actions/cartActions'
import alertify from 'alertifyjs'
import '../style/style.css'
import {Link} from 'react-router-dom'
import { Pen } from "react-bootstrap-icons";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProduct()
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product })
    alertify.set('notifier', 'position', 'bottom-left');
    alertify.notify(product.productName + " sepete Eklendi !")
  }

  render() {
    return (
      <div className='container '>

        <Badge color='success'>{this.props.currentCategory.categoryName}</Badge>

        <div className='row  '>

          {this.props.products.map(product => (


            <div key={product.id} className='col-sm  mt-5 d-flex flex-column align-items-center'>
              <div >
                
              <p className='position-absolute text-light bg-dark p-1 f-right'>Stock:{product.unitsInStock}</p><img src={require('../style/product.jpg')} /></div>
              <p >{product.productName} <Link to={"/saveproduct/"+product.id}></Link> </p>
              <p >$ {product.unitPrice}</p>
              <Button className='w-75 rounded-0' color='dark' onClick={() => this.addToCart(product)}>Add To Cart</Button>
            </div>




          ))}
        </div>
    
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  }
}

function mapDispaschToProps(dispatch) {
  return {
    actions: {
      getProduct: bindActionCreators(productActions.getProduct, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  }
}


export default connect(mapStateToProps, mapDispaschToProps)(ProductList)