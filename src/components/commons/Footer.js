import React from 'react'
import { useDispatch } from 'react-redux'

import { startLogout } from '../../actions/auth';

export const Footer = () => {

    return (
        <nav className="footer container-fluid mt-3 p-3 ">
            <div className="row">  
                <div className="col-sm-6 mt-2"><img src="/img/logos-socios.png" className="logos" /></div>
                <div className="col-sm-3 mt-2"><img src="/img/logo-unidad.png" className="logos" /></div>

            </div>    

        </nav>
    )
}
