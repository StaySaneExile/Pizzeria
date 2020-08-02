import React from "react";
import {Categories} from "../Components";
import SortPopup from "../Components/SortPopup";
import PizzaBlock from "../Components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setSortByCategory, setSortByPopular} from "../redux/reducers/filterReducer";
import {getPizzas} from "../redux/reducers/pizzasReducer";
import Preloader from "../Components/Preloader/Preloader";
import {addPizzaToCart} from "../redux/reducers/CartReducer";

const itemsCategory = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые']
const itemsPopular = [
    {name: 'популярности', type: 'popular'},
    {name: 'цена', type: 'price'},
    {name: 'алфавиту', type: 'name'}
]

const HomePages = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return {
            pizzas: state.pizzas.items,
            preloader: state.pizzas.isLoading,
            category: state.filters.category,
            sortBy: state.filters.sortBy,
            cartItems: state.cart.items
        }
    });

    React.useEffect(() => {
        dispatch(getPizzas(state.sortBy, state.category));
    }, [state.category, state.sortBy])

    const clickSetCategory = React.useCallback((index) => {
        dispatch(setSortByCategory(index));
    }, [])

    const onClickSortType = React.useCallback((type) => {
        dispatch(setSortByPopular(type));
    }, [])

    const clickAddPizzaToCart = (obj) => {
        debugger
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div>
            {state.preloader
                ? <Preloader/>
                : <div className="container">
                    <div className="content__top">
                        <Categories activeCategory={state.category}
                                    clickSetCategory={clickSetCategory}
                                    items={itemsCategory}/>
                        <SortPopup activeSortType={state.sortBy}
                                   onClickSortType={onClickSortType}
                                   items={itemsPopular}/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {
                            state.pizzas.map(obj => <PizzaBlock
                                    cartItems={state.cartItems[obj.id] && state.cartItems[obj.id].items.length}
                                    clickAddPizzaToCart={clickAddPizzaToCart}
                                    key={obj.id}
                                    {...obj}/>
                                )
                        }
                    </div>
                </div>
            }
        </div>
    )
}


export default HomePages;