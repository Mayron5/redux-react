import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO, INITIAL_STATE } from "../constants/numeros";

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
            return INITIAL_STATE;
    };
};

export default reducerNumber;
