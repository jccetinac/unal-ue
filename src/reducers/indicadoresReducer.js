import { types } from '../types/types';

const initialState = {
    indicadoresList: [],
    length: 0,
    citySelected: 'bogota',
    yearSelected: 2019
}

export const indicadoresReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.setIndicadores:
                return {
                    ...state,
                    indicadoresList: action.payload
                }
        case types.uiStartLoading:
                return {
                    ...state,
                    indicadoresList: action.payload
                }
        case types.setSelectedCity:
            return {
                ...state,
                citySelected: action.payload
            }
        case types.setSelectedYear:
            return {
                ...state,
                yearSelected: action.payload
            }            
        default:
            return state;
    }

}