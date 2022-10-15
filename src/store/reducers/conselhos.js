import { ALTERAR_CONSELHO, INITIAL_STATE } from "../constants/conselhos";

const reducerAdvice = (state, action) => {
    switch (action.type) {
        case ALTERAR_CONSELHO:
            return {
                ...action.payload
            }
        default:
            return state || INITIAL_STATE;
    }
}

export default reducerAdvice;