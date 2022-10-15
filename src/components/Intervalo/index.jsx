import { connect } from 'react-redux';
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../../store/actions/numeros'

import Card from '../Card';
import './index.css';

const Intervalo = (props) => {

    const { min, max, alterarMinimo, alterarMaximo } = props;

    return (
        <Card title='Intervalo de Números' red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} onChange={event => alterarMinimo(+event.target.value)} min={1} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max} onChange={event => alterarMaximo(+event.target.value)} min={min} />
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);