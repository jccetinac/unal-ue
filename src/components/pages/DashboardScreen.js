import React from 'react';
import { DescriptionGeneral} from '../commons/DescriptionGeneral';
import { FilterGeneral } from '../commons/FilterGeneral';
import { Navbar } from '../commons/NavBar';
import { DetailsGeneral } from '../commons/DetailsGeneral'

export const DashboardScreen = () => {

    return (
        <div>
            
            <Navbar />


            <main className="container pt-5">

                <h1>DashBoard</h1>
                <FilterGeneral />
                <DescriptionGeneral />
                <div className="row mt-4">
                    <div className="col-md-6">a</div>
                    <div className="col-md-6">
                    <DetailsGeneral/>

                    </div>
                </div>

            </main>


        </div>
    )
}
