const initialState = {
    category: 0,
    sortBy: 'popular'
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_BY_POPULAR':
            return {
                ...state,
                sortBy: action.payload
            }
        case 'SET_SORT_BY_CATEGORY':
            return {
                ...state,
                category: action.payload
            }



        default:
            return state
    }
}

//actionCreators

const setSortByPopular = (value) => ({type: 'SET_SORT_BY_POPULAR', payload: value})
const setSortByCategory = (value) => ({type: 'SET_SORT_BY_CATEGORY', payload: value})
