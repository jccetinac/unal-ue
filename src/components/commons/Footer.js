import React from 'react'
import { useDispatch } from 'react-redux'

import { startLogout } from '../../actions/auth';

export const Footer = () => {

    return (
        <nav className="footer container-fluid mt-3 p-3 ">
            <div className="row">  
                <img src="https://firebasestorage.googleapis.com/v0/b/react-app-unal.appspot.com/o/logos.png?alt=media&token=e36c6c7e-9943-4a97-ae78-258e9e64da6c" className="d-block m-auto logos" />

            </div>    

        </nav>
    )
}
