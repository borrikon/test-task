import UserItem from '../components/userItem'


export default function UsersList({users}){
    
    return(
        <>
            {
                users.map(()=><UserItem />)
            }
        </>
    )
}