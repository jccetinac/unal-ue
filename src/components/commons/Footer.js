import React from 'react'
import { useDispatch } from 'react-redux'

import { startLogout } from '../../actions/auth';

export const Footer = () => {

    return (
        <nav className="footer container-fluid mt-3 p-3 ">
            <div className="row">  
                <img src="https://firebasestorage.googleapis.com/v0/b/react-app-unal.appspot.com/o/logos.jpg?alt=media&token=396eaa58-1691-4a46-8bf7-900c330bc2c6" className="d-block m-auto logos" />
            </div>    

        </nav>
    )
}
