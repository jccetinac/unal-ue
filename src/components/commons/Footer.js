import React from 'react'
import { useDispatch } from 'react-redux'

import { startLogout } from '../../actions/auth';

export const Footer = () => {

    return (
        <nav className="footer container p-3 ">
            <div className="row">  
                <div className="col-md-6"><img src="./img/logos-socios.png" className="logos" /></div>
                <div className="col-md-3"><img src="./img/logo-unidad.png" className="logos" /></div>

            </div>    

        </nav>
    )
}
