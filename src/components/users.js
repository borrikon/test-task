import Button from '../components/button';
import UsersList from './usersList';
import { useEffect, useState } from 'react';
import { getUsers } from '../helpers/request';

import '../styles/users.scss';


function Users(){

    const [ page, setPage ] = useState()
    const [ users, setUsers ] = useState([])
    const [ lastPage, setLastPage] = useState(false)

    function getNewPage(){
        getUsers(page)
        .then((data)=>{
            if(page === 1){
                setLastPage(true)
            } 
            setPage(page-1) 
            setUsers(users.concat(data.users))
        })
    }
    useEffect(()=>{
        let fetchData = async () => {
          let data = await getUsers()
            .then((data)=> data['total_pages'])
            setPage(data)
        }
        fetchData()
        getNewPage()
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