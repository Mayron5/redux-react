import { ALTERAR_CONSELHO } from '../constants/conselhos';

import axios from 'axios';

export async function getNewAdviceFromAPI() {

    let result;

    await axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            result = response.data.slip;
        });

    return result;
}


// Action Creator
export const alterarConselhoAction = (novoConselho) => {
    return {
        type: ALTERAR_CONSELHO,
        payload: novoConselho,
    };
};