import React from 'react'
import { useDispatch } from 'react-redux'

import { startLogout } from '../../actions/auth';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <nav className="journal__sidebar">
            
                <button 
                    className="btn"
                    onClick={ hanleLogout }
                >
                    Logout
                </button>
  
        </nav>
    )
}
