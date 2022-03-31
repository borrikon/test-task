import { useEffect, useState } from "react";
import { getPositions } from "../helpers/request";
import PostRadioItem from "./postRadioItem";

function PostFormRadio({changeHandler}){

    const [ position, setPositions ] = useState([])

    useEffect(()=>{
        let fetchData = async () => {
            let data = await getPositions()
            setPositions(data)
        }
        fetchData()
    }, [])

    return(
        <div 
            className='radioCont'
            onChange={(e)=>changeHandler('position', e.target.value)}
        >
            <p>Select your position</p>
            {
                position.map((data, i)=><PostRadioItem key={data['id']+i} index={i} data={data} />)
            }
        </div>
    )
}
export default PostFormRadio;