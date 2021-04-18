import React from 'react'
import { useDispatch } from 'react-redux'

import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <nav className="navbar">
            
                <button 
                    className="btn bt-primary"
                    onClick={ hanleLogout }
                >
                    Logout
                </button>
  
        </nav>
    )
}
