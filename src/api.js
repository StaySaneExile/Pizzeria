import axios from "axios";

export const apiPizzas = {
    getListPizzas() {
        return axios.get('http://localhost:3004/pizzas')
            .then((res)=> {
                return res.data
            })
    }

}