import '../styles/userItem.scss';
import Icon from '../assets/user.png';

function UserItem(){
    return(
        <div className='userItemCont'>
            <img src={Icon} alt='icon'/>
            <p>Salvador Stewart Flynn Thomas Salva...</p>
            <div className='subInfo'>
                <p>Leading specialist of the department o...</p>
                <p>JeromeKlarkaJeromeKlarka19233623...</p>
                <p>+38 (098) 278 76 24</p>
            </div>
        </div>
    )
}

export default UserItem;