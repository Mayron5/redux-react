import { combineReducers, createStore } from 'redux'

import reducerNumber from './reducers/numeros'
import numberMiddleware from './middlewares/numeros';

const reducers = combineReducers({
    numeros: reducerNumber
});

const storeConfig = () => {
    return createStore(reducers, numberMiddleware);
}

export default storeConfig;