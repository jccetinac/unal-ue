import { types } from '../types/types';

export const setIndicadores = ( indicadores ) => ({
    type: types.setIndicadores,
    payload: indicadores
});


export const setSelectedCity = (city) =>({
    type: types.setSelectedCity,
    payload: city
});

export const setSelectedYear = (year) =>({
    type: types.setSelectedYear,
    payload: year
});