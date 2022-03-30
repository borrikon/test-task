import axios from "axios";

const getPositionsUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';

export function getPositions(){
    return(
        axios.get(getPositionsUrl)
        .then((response)=>response.data.positions)
        .catch((err)=>console.log(err))
    )
    
}
export function getUsers(pageNumber=1){
    return(
        axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${pageNumber}&count=6`)
        .then((response)=>response.data)
        .catch((err)=>console.log(err))
    )
}