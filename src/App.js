import React from 'react';
import {Header} from "./Components";
import HomePages from "./Pages/HomePages";
import CartPages from "./Pages/CartPages";
import {Route} from "react-router-dom";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' component={HomePages} exact/>
                <Route path='/cart' component={CartPages} exact/>
            </div>
        </div>
    );
}


export default App;

