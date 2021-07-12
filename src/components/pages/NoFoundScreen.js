import React from 'react';
import { Navbar } from '../commons/NavBar';
import { Footer } from '../commons/Footer';

export const NoFoundScreen = () => {


    return (
        <div>
            
            <Navbar />


   
                <div className="container p-5 mt-4">
                    <h1 className="text-center">Próximamente</h1>
                </div>
           

            <Footer/>


        </div>
    )
}
