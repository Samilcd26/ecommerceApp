import * as ActionsType from '../actions/ActionsType'
import initialState from './initialState';


//fonk çağrılınca gelen kategori bilgisini redusera return eder 
//gelen veriyle işlem yapılacak yer burası
export default function changeCategoryReducer(state=initialState.currentCategory,action){
    switch (action.type) {
        case ActionsType.CHANGE_CATEGORY:
            return action.payload
    
        default:
            return state;
    }
}