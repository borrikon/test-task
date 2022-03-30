import '../styles/button.scss';

function Button({name, action}){
    return(
        <button className='btn' onClick={(e)=>action(e)}>
            {name}
        </button>
    )
}
export default Button;