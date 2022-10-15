import Card from "../Card"

import { connect } from "react-redux";
import { alterarConselhoAction, getNewAdviceFromAPI } from "../../store/actions/conselhos";
import { useEffect } from "react";

import './index.css';

const Conselho = (props) => {

    const { advice, alterarConselho } = props;

    const updateAdvice = () => {
        getNewAdviceFromAPI().then(response => {
            alterarConselho(response)
        });
    };

    useEffect(() => {
        updateAdvice();
    }, []);

    return (
        <Card title="Redux com Axios" red>
            <div className="Conselho">
                <span>
                    {advice.advice}
                </span>
                <div className="row">
                    <button onClick={() => updateAdvice()}>Novo Conselho</button>
                </div>
            </div>
        </Card>
    );
};


const mapStateToProps = (state) => {
    return {
        advice: state.conselhos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        alterarConselho(novoConselho) {
            const action = alterarConselhoAction(novoConselho);
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conselho);