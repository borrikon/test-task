import '../styles/button.scss';

function Button({name, action, disabled}){
    //let classes = []
    return(
        <button className={!disabled ?'btn' : 'btn disabled'} onClick={(e)=>action(e)}>
            {name}
        </button>
    )
}
export default Button;