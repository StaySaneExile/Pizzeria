import axios from "axios";

export const apiPizzas = {
    getListPizzas(sortBy, category) {
        return axios.get(`http://localhost:3004/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`)
            .then((res)=> {
                return res.data
            })
    }
}