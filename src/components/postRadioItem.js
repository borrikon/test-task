export default function PostRadioItem({data, index}){
    return(
        <div>
            <input 
                // default={!index ? true : false}
                name='position' 
                value={data.id}
                id='front' 
                type='radio'
            />
            <label for='front'>{data['name']}</label>
        </div>
    )
}