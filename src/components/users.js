import Button from '../components/button';
import UsersList from './usersList';
import { useEffect, useState } from 'react';
import { getUsers } from '../helpers/request';

import '../styles/users.scss';




function Users(){

    const [ page, setPage ] = useState(1)
    const [ users, setUsers ] = useState([])
    const [ lastPage, setLastPage] = useState(false)

    function getNewPage(){
        getUsers(page)
        .then((data)=>{
            if(!data.links.next_url){
                setLastPage(!lastPage)
                return
            } 
            setPage(page+1) 
            setUsers(users.concat(data.users))
        })
        
    }
    useEffect(()=>{
        if(page === 1){
            getNewPage()
        }
    }, [])

    return(
        <div className='container'>
            <div className='userCont'>
                <h2 className='usersTitle'>Working with GET request</h2>
                <div className='usersList'>
                    <UsersList users={users} />
                </div>
                <div onClick={()=>getNewPage()} className='btnContainer'>
                    <Button name={'Show more'} disabled={lastPage}/>
                </div>
            </div>
        </div>
    )
}

export default Users;