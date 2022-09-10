import * as ActionsType from './ActionsType'


//Oluşuturulan reduserların aksiyonlarını yapılandırıyoruz
export function changeCategory(category){
    return {type:ActionsType.CHANGE_CATEGORY, payload:category}
}

export function getCategoriesSuccess(categories){
    return {type:ActionsType.GET_CATEGORIES_SUCCESS, payload:categories}
}


export function getCategories(){
    return function(dispatch){
        let url = "http://localhost:3000/categories"
        return fetch(url)
        .then(res=>res.json())
        .then(result=>dispatch(getCategoriesSuccess(result)))
    }
}