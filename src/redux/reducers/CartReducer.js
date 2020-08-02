const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice =(arr)=> arr.reduce((sum, obj) => obj.price + sum, 0)

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const items = Object.values(newItems).map(obj=> obj.items)
            const allPizzas = [].concat.apply([].concat.apply([], items));
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        }
        case 'CLEAR_CART':
            return {
                ...state,
                totalPrice: 0,
                totalCount: 0,
                items: {}
            }
        case 'DELETE_PIZZA':
            const deletedPizza = {
                ...state.items
            }
            const countTotalPrice = deletedPizza[action.id].totalPrice
            const countTotalCount = deletedPizza[action.id].items.length
            delete deletedPizza[action.id]
            return {
                ...state,
                items: deletedPizza,
                totalPrice: state.totalPrice - countTotalPrice,
                totalCount: state.totalCount - countTotalCount
            }


        default:
            return state
    }
}

//actionCreators
export const addPizzaToCart = (pizzaObj) => ({type: 'ADD_PIZZA_TO_CART', payload: pizzaObj})
export const clearCart = () => ({type: 'CLEAR_CART'})
export const deletePizza = (id) => ({type: 'DELETE_PIZZA', id})
export const setTotalPrice = (payload) => ({type: 'SET_TOTAL_PRICE', payload: payload})
export const setTotalCount = (payload) => ({type: 'SET_TOTAL_COUNT', payload: payload})
