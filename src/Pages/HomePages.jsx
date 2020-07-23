import React from "react";
import {Categories} from "../Components";
import SortPopup from "../Components/SortPopup";
import PizzaBlock from "../Components/PizzaBlock";


const HomePages = (props) => {
    debugger
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые']}
                    /* clickItem={clickItem}*//>
                <SortPopup items={[
                    {name:'популярности', type: 'popular'},
                    {name:'цена', type: 'price'},
                    {name:'алфавиту', type: 'alphabet'}
                    ]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    props.pizzas.map(p => <PizzaBlock key={p.id} {...p}/>)
                }
            </div>
        </div>
    )
}


export default HomePages;