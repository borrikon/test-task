import Button from './button';
import scroll from '../helpers/scroll';


import '../styles/header.scss';
import logo from '../assets/logo.svg'

function Header(){

    return(
        <div className='headerCont'>
            <div className='headerCont-inner'>
                <div className='imgCont'>
                    <img src={logo} alt='logo'/> 
                </div>
                <div className='btnCont'>
                    <Button name={'Users'} action={scroll}/>
                    <Button name={'Sign up'} action={scroll}/>
                </div>
            </div>
        </div>
    )
}

export default Header;