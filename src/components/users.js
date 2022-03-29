import UserItem from './userItem';
import Button from '../components/button';
import '../styles/users.scss';

function Users(){
    return(
        <div className='container'>
            <div className='userCont'>
                <h2 className='usersTitle'>Working with GET request</h2>
                <div className='usersList'>
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                </div>
                <Button name={'Show more'} />
            </div>
        </div>
    )
}

export default Users;