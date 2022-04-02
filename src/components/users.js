import { useEffect, useState } from 'react';

import Button from '../components/button';
import UsersList from './usersList';
import Loader from './loader';

import { getUsers } from '../helpers/request';

import '../styles/users.scss';

function Users(){

    const [ firstLoad, setFirstLoading ] = useState(true)
    const [ loading, setLoading ] = useState(true)
    const [ page, setPage ] = useState()
    const [ users, setUsers ] = useState([])
    const [ lastPage, setLastPage] = useState(false)

    function getNewPage(){
        getUsers(page)
        .then((data)=>{
            if(page < 1){
                setLastPage(true)
            } 
            setPage(page-1) 
            setUsers(users.concat(data.users))
        })
    }
    useEffect(()=>{
        getUsers()
        .then((result)=>{
            setPage(result['total_pages'])
            setFirstLoading(false)
        })
    }, [])
    useEffect(()=>{
        getNewPage()
        setLoading(false)
    }, [firstLoad])

    return(
        <div className='container'>
            <div className='userCont'>
                <h2 className='usersTitle'>Working with GET request</h2>
                <div className='usersList'>
                    {
                        !loading 
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

 