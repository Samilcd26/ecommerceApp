import * as ActionsType from '../actions/ActionsType'
import initialState from './initialState';



export default function saveProductreducer(state = initialState.saveProduct, action) {
    switch (action.type) {
        case ActionsType.UPDATE_PRODUCT_SUCCESS:
            return action.payload

        case ActionsType.CREATE_PRODUCT_SUCCESS:
            return action.payload

        default:
            return state;
    }
}