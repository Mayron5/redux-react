import { applyMiddleware } from "redux";
import { NUM_MAX_ALTERADO } from "../constants/numeros";


const numberMax = (store) => (next) => (action) => {

    const { max } = store.getState().numeros;

    if (action.payload > max) {
        action.type = NUM_MAX_ALTERADO;
    };

    next(action);
}


const numberMiddleware = applyMiddleware(numberMax);

export default numberMiddleware;