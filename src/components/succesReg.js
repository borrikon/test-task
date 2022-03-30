import succes from '../assets/successImage.svg'; 
import '../styles/succesReg.scss';


function SuccesReg(){
    return(
        <div className='container'>
            <div className='contSuccess'>
                <h2>User successfully registered</h2>
                <img src={succes} alt='succesfully registred'/>
            </div>
        </div>
    )
}

export default SuccesReg;