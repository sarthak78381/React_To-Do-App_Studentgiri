import React from 'react'

import './loader.scss';

function Loader() {
    return (
        <div className="loader__container">
            <div className="lds-circle">
                <div></div>
            </div>
        </div>
    )
}

export default Loader
