import {apiPizzas} from "../../api";

const initialState = {
    items: [],
    isLoading: false
}

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.items
            }
        case 'SET_PRELOADER':
            return {
                ...state,
                isLoading: action.value
            }

        default:
            return state
    }
}

//actionCreators
export const setPizzas = (items) => ({type: 'SET_PIZZAS', items})
export const setPreloader = (value) => ({type: 'SET_PRELOADER', value})

//thunk
export const getPizzas = (sortBy, category) => async (dispatch) => {
    try {
        dispatch(setPreloader(true))
        let result = await apiPizzas.getListPizzas(sortBy, category);
        dispatch(setPizzas(result))
        dispatch(setPreloader(false))
    } catch (e) {
        console.log(e)
    }

}
