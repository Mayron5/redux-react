import { INITIAL_STATE, NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "../constants/numeros";

const reducerNumber = (state, action) => {
    
    switch (action.type) {
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state || INITIAL_STATE;
    };
};

export default reducerNumber;
