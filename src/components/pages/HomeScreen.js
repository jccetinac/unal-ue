import React from 'react';
import { Navbar } from '../commons/NavBar';
import { useSelector } from 'react-redux';
import { Footer } from '../commons/Footer';
import SimpleSlider from '../commons/Slider';

export const HomeScreen = () => {

    const { indicadoresList} = useSelector( state => state.indicadores);
    console.log(indicadoresList);

    return (
        <div>
            
            <Navbar />


   
                <SimpleSlider />
           

            <Footer/>


        </div>
    )
}
