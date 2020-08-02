import React from "react";
import preloader from '../../assets/img/771.gif'
import './Preloader.css'

const Preloader = (props) =>  {
        return (
            <div className='preloader'>
                <img src={preloader}/>
            </div>
        )
}


export default Preloader;