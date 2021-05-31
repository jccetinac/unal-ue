import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

import { HomeScreen } from '../components/pages/HomeScreen';
import { SecondaryScreen } from "../components/pages/SecondaryScreen";
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { loadIndicadores } from '../helpers/load-indicadores';
import { setIndicadores } from '../actions/indicadores';
import { CityScreen } from '../components/pages/CityScreen';
import { ProyectoScreen } from '../components/pages/ProyectoScreen';
import { IndicadoresScreen } from '../components/pages/IndicadoresScreen';
import { DimensionScreen } from '../components/pages/DimensionScreen';
import { IndicadorScreen } from '../components/pages/IndicadorScreen';
import { ProductosScreen } from '../components/pages/ProductosScreen';
import { ArchivosScreen } from '../components/pages/ArchivosScreen';
import { RegionesScreen } from '../components/pages/RegionesScreen';
import { loadDescripciones } from '../helpers/load-definiciones';
import { setDescripciones } from '../actions/descripciones';
import { NoFoundScreen } from '../components/pages/NoFoundScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);



    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async (user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
                 const indicadores = await loadIndicadores();
                 dispatch( setIndicadores(indicadores) );          
                   
                 const descripciones = await loadDescripciones();
                 dispatch( setDescripciones(descripciones));  

            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <div className="loader-container p-5 mt-5">
            <img src="/img/loader.gif"  className="m-auto loader" />
            </div>
        )
    }

    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ HomeScreen }
                    />
                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/proyecto"
                        component={ ProyectoScreen }
                    />     
                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/productos"
                        component={ ProductosScreen }
                    />                    
                    <PrivateRoute 
                    exact
                    isAuthenticated={ isLoggedIn }
                    path="/indicadores"
                    component={ IndicadoresScreen }
                    />

                    <PrivateRoute 
                    exact
                    isAuthenticated={ isLoggedIn }
                    path="/dimension/:id"
                    component={ DimensionScreen }
                    />
                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/archivos"
                        component={ ArchivosScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/regiones"
                        component={ RegionesScreen }
                    />                    
                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/secondary"
                        component={ SecondaryScreen }
                    />
                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/indicador/:id"
                        component={ IndicadorScreen }
                    />
                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/dashboard/city/:city"
                        component={ CityScreen }
                    />      

                     <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/dashboard/city/:city"
                        component={ CityScreen }
                    /> 

                     <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/proximamente"
                        component={ NoFoundScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
