import { useEffect, useState } from 'react';

import Button from '../components/button';
import UsersList from './usersList';
import Loader from './loader';

import { getUsers } from '../helpers/request';

import '../styles/users.scss';

function Users(){

    const [ page, setPage ] = useState(1)
    const [ users, setUsers ] = useState([])
    const [ lastPage, setLastPage] = useState(false)

    function getNewPage(){
        getUsers(page)
        .then((data)=>{
            if(data.links["next_url"] === null){
                setLastPage(true)
            } 
            setPage(page+1) 
            setUsers(users.concat(data.users))
            
        })
    }
    useEffect(()=>{
        getNewPage()
    }, [])

    return(
        <div className='container'>
            <div className='userCont'>
                <h2 className='usersTitle'>Working with GET request</h2>
                <div className='usersList'>
                    {
                        users.length 
                        ? <UsersList users={users} />
                        : <Loader />
                    }
                </div>
                <div onClick={()=>getNewPage()} className='btnContainer'>
                    <Button name={'Show more'} disabled={lastPage}/>
                </div>
            </div>
        </div>
    )
}

export default Users;

 