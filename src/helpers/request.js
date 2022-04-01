import axios from "axios";

const getPositionsUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
const getTokenUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';
const postUserUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

export function getPositions(){
    return(
        axios.get(getPositionsUrl)
        .then((res)=>res.data.positions)
        .catch((err)=>console.log(err))
    )
    
}
export function getUsers(pageNumber){
    return(
        axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${pageNumber}&count=6`)
        .then((response)=>response.data)
        .catch((err)=>console.log(err))
    )
}
export function getToken(){
    return(
        axios.get(getTokenUrl)
        .then((res)=>res.data.token)
        .catch((e)=>console.log(e))
    )
}
export function postUser(data, token){
    return(
        axios.post(postUserUrl, data, {headers: {'Token': token}})
        .catch((e)=>console.log(e))
    )
}