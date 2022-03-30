import '../styles/userItem.scss';

function UserItem(data){
    let {name, phone, email, position, photo} = data.data
    return(
        <div className='userItemCont'>
            <img src={photo} alt='icon'/>
            <p>{name}</p>
            <div className='subInfo'>
                <p>{position}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </div>
    )
}

export default UserItem;