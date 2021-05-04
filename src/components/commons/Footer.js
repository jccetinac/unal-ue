import React from 'react'
import { useDispatch } from 'react-redux'

import { startLogout } from '../../actions/auth';

export const Footer = () => {

    return (
        <nav className="footer container p-3 bg-dark">
            <div className="row">  
                <div className="col-md-3"><img src="https://picsum.photos/50/50" className="img-fluid" /></div>
                <div className="col-md-3"><img src="https://picsum.photos/50/50" className="img-fluid" /></div>
                <div className="col-md-3"><img src="https://picsum.photos/50/50" className="img-fluid" /></div>
                <div className="col-md-3"><img src="https://picsum.photos/50/50" className="img-fluid" /></div>
            </div>    

        </nav>
    )
}
