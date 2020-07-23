import React from 'react';
import {Header} from "./Components";
import HomePages from "./Pages/HomePages";
import CartPages from "./Pages/CartPages";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import {getPizzas} from "./redux/reducers/pizzasReducer";

const App = (props) => {

    // const [pizzas, setPizzas] = React.useState([])

    React.useEffect(() => {
        props.getPizzas()
    }, [])

console.log(props.pizzas)
    return (

        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' render={() => <HomePages pizzas={props.pizzas}/>} exact/>
                <Route path='/cart' component={CartPages} exact/>
            </div>
        </div>
    );
}

const mapStateProps = (state) => {
    return {
        pizzas: state.pizzasReducer.items
    }
}

export default connect(mapStateProps, {getPizzas})(App);
