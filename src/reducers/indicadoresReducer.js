import { types } from '../types/types';

const initialState = {
    indicadoresList: [],
    length: 0
}

export const indicadoresReducer = ( state = initialState, action ) => {
    console.log('action indicadores');
    console.log(action);

    switch ( action.type ) {
        case types.setIndicadores:
            console.log(' entra al case');
                return {
                    ...state,
                    indicadoresList: action.payload
                }
        case types.uiStartLoading:
            console.log(' otro casee');
                return {
                    ...state,
                    indicadoresList: action.payload
                }
        default:
            return state;
    }

}