import * as actionTypes from '../actions/ActionsType'
import initialState from './initialState'

export default function cartReducer(state = initialState.cartItem, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:

            var addEdItem = state.find(c => c.product.id === action.payload.product.id)

            if (addEdItem) {
                var newState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id) {

                        return Object.assign({}, addEdItem, { quantity: addEdItem.quantity + 1 })
                    } else

                        return cartItem
                })
                return newState
            } else {
                return [...state, { ...action.payload }]

            }

        case actionTypes.REMOVE_FROM_CART:
           
            var RemovNewState = state.filter(cartItem => cartItem.product.id !== action.payload.id)
            
            return RemovNewState

        default:
            return state;
    }
}