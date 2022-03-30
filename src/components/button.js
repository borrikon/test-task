import '../styles/button.scss';

function Button({name, scroll}){
    return(
        <button className='btn' onClick={(e)=>scroll(e)}>
            {name}
        </button>
    )
}
export default Button;