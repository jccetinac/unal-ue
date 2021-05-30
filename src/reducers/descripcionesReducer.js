import { types } from '../types/types';

const initialState = {
    descripcionesList: [],
    otra:'a',
    length: 0
}

export const descripcionesReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.setDescripciones:
                return {
                    ...state,
                    descripcionesList: action.payload
                }
        case types.uiStartLoading:
                return {
                    ...state,
                    descripcionesList: action.payload
                }
        default:
            return state;
    }

}