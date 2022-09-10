import * as ActionsType from '../actions/ActionsType'
import initialState from './initialState';


//fonk çağrılınca gelen kategori bilgisini redusera return eder 
//gelen veriyle işlem yapılacak yer burası
export default function changeCategoryReducer(state=initialState.categories,action){
    switch (action.type) {
        case ActionsType.GET_CATEGORIES_SUCCESS:
            return action.payload
    
        default:
            return state;
    }
}