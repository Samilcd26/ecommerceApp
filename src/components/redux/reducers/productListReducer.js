import * as ActionsType from '../actions/ActionsType'
import initialState from './initialState';


//fonk çağrılınca gelen kategori bilgisini redusera return eder 
//gelen veriyle işlem yapılacak yer burası
export default function productListReducer(state=initialState.product,action){
    switch (action.type) {
        case ActionsType.GET_PRODUCT_SUCCESS:
            return action.payload
    
        default:
            return state;
    }
}