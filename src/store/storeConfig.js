import { combineReducers, createStore } from 'redux'

import reducerNumber from './reducers/numeros'
import reducerAdvice from './reducers/conselhos';
import numberMiddleware from './middlewares/numeros';

const reducers = combineReducers({
    numeros: reducerNumber,
    conselhos: reducerAdvice
});

const storeConfig = () => {
    return createStore(reducers, numberMiddleware);
}

export default storeConfig;