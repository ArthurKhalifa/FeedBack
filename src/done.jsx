import React from 'react'
import './Done.css';

import oxen from "./components/img/ty.png"


export default function done() {
    return (
        <div className="Done-main">
            <div className="done-content">
                <h1><span className='red'>O</span>brigado<span className='red'>!</span></h1>
                <div><img src={oxen} title='Thanks' id='ty' /></div>
            </div>
        </div>
    )

}




