import Button from '../components/button';

import '../styles/postForm.scss';

function PostForm(){

    // let defaultValue  = 'Upload your photo'

    // function innerText(e){
    //    e.preventDefault()
    //     let text = e.target.value
    //     console.log(e)
    // }

    return(
        <div className='container'>
            <div className='postCont'>
                <h2>Working with POST request</h2>
                <form>
                    <div className='inputCont'>
                        <input id='name' type='text'/>
                        <label for='name'>Your name</label>
                    </div>
                    <div className='inputCont'>
                        <input id='email' type='email'/>
                        <label for='email'>Email</label>
                    </div>
                    <div className='inputCont'>
                        <input id='phone' type='tel'/>
                        <label for='phone'>Phone</label>
                    </div>
                    <div className='radioCont'>
                        <p>Select your position</p>
                        <div>
                            <input name='position' id='front' type='radio'/>
                            <label for='front'>Frontend developer</label>
                        </div>
                        <div>
                            <input name='position' id='back' type='radio'/>
                            <label for='back'>Backend developer</label>
                        </div>
                        <div>
                            <input name='position' id='designer' type='radio'/>
                            <label for='designer'>Designer</label>
                        </div>
                        <div>
                            <input name='position' id='qa' type='radio'/>
                            <label for='qa'>QA</label>
                        </div>
                    </div>
                    <div  className='pictureCont'>
                        <label for='picture'>Upload</label>
                        <input type='file' 
                            id='picture' 
                            name='avatar'
                            accept='image/png, image/jpeg'
                        />
                    </div>
                    <Button name={'Sing up'} />
                </form>
            </div>
        </div>
    )
}
export default PostForm;