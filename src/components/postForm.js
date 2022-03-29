import Button from '../components/button';

import '../styles/postForm.scss';

function PostForm(){
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
                    <div>
                        <input name='position' id='front' type='radio'/>
                        <label for='front'>Frontend developer</label>
                        <input name='position' id='back' type='radio'/>
                        <label for='back'>Backend developer</label>
                        <input name='position' id='designer' type='radio'/>
                        <label for='designer'>Designer</label>
                        <input name='position' id='qa' type='radio'/>
                        <label for='qa'>QA</label>
                    </div>
                    <Button name={'Sing up'} />
                </form>
            </div>
        </div>
    )
}
export default PostForm;