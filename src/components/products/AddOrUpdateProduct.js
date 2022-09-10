import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import  * as getCategories  from "../redux/actions/categoryActions";
import * as saveProduct  from "../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import { bindActionCreators } from 'redux'
function AddOrUpdateProduct({
  products,
  categories,
  getProduct,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });

  useEffect(() => {
    
    if (categories.length === 0) {
      getCategories();

    }
    setProduct({ ...props.product });
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct(previousProduct => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function handlerSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handlerSave}
    />
  );
}

export function getProductById(products, productId) {
  let product = products.find((products) => products.id == productId) || null;
  return product;
}

function mapStateToProps(state, ownProps) {

  try {
    const productId = ownProps.match.params.productId;
    const product =
      productId && state.productListReducer.length > 0
        ? getProductById(state.productReducer, productId)
        : {};
    return {
      product,
      products: state.productListReducer,
      categories: state.categoryListReducer,
    };
  } catch (error) {
    console.log("Hata")
  }

}


function mapDispaschToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(getCategories.getCategories, dispatch),
      saveProduct: bindActionCreators(saveProduct.saveProduct, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispaschToProps)(AddOrUpdateProduct);
