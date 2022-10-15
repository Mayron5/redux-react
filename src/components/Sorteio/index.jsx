import Card from '../Card';
import { connect } from 'react-redux';

const sortearNumero = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Sorteio = (props) => {

    const { max, min } = props;

    return (
        <Card title='Sorteio de um Números' purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{sortearNumero(max, min)}</strong>
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

export default connect(mapStateToProps)(Sorteio);