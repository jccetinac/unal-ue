import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <nav className="navbar">

            <div className="container">
                <p className="text-white">Logos presidencia</p>
            </div>

            <div className="container">
                <button className="btn bt-primary text-white"onClick={ hanleLogout }>Logout</button>
                <Link className="btn bt-primary text-white" to="/"className="link">Inicio</Link>
                <Link className="btn bt-primary text-white" to="/proyecto"className="link">Proyecto</Link>
                <Link className="btn bt-primary text-white" to="/indicadores"className="link">Indicadores</Link>
                <Link className="btn bt-primary text-white" to="/productos"className="link">Productos</Link>
                <Link className="btn bt-primary text-white" to="/regiones"className="link">Regiones</Link>
            </div>
        </nav>
    )
}
