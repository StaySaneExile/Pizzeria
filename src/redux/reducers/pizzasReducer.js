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

        default:
            return state
    }
}

//actionCreators
export const setPizzas = (items) => ({type: 'SET_PIZZAS', items})

//thunk
export const getPizzas = () => async (dispatch) => {
    try {
        let result = await apiPizzas.getListPizzas();
        dispatch(setPizzas(result))
    } catch (e) {
        console.log(e)
    }

}
