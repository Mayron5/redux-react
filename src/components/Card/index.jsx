import './index.css'

const getColor = (props) => {
    
    if (props.red) return 'Red'
    else if (props.green) return 'Green'
    else if (props.blue) return 'Blue'
    else if (props.purple) return 'Purple'

    return ''
}

const Card = (props) => {

    const { title, children } = props;

    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className='Title'>{title}</span>
            </div>
            <div className="Content">
                {children}
            </div>
        </div>
    );
};

export default Card;