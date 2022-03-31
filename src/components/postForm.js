import { useState } from 'react';
import Button from '../components/button';

import '../styles/postForm.scss';

function PostForm(){

    const [ inputTouched, setInputTouched ] = useState(false)
    const [ formValue, setFormValue ] = useState({
       'name': '',
       'email': '',
       'phone':'', 
       'position': '',
       'picture': '',
    })

    function changeValue(fildName, value){
        setInputTouched(true)
        let updatedValue = {}
        updatedValue[fildName] = value
        switch(fildName){
            case  'name':
                setFormValue({...formValue, ...updatedValue})
            break;
            case  'email':
                setFormValue({...formValue, ...updatedValue})
            break;
            case  'phone':
                setFormValue({...formValue, ...updatedValue})
            break;
            case  'position':
                setFormValue({...formValue, ...updatedValue})
            break;
            case  'picture':
                setFormValue({...formValue, ...updatedValue})
            break;
            default: return
        }
   }

    return(
        <div className='container'>
            <div className='postCont'>
                <h2>Working with POST request</h2>
                <form>
                    <div className='inputCont'>
                        <input
                            className={!inputTouched ? '' : 'touched'} 
                            id='name' 
                            type='text' 
                            onChange={(e)=>changeValue('name', e.target.value)} 
                            value={formValue['name']}
                        />
                        <label for='name'>Your name</label>
                    </div>
                    <div className='inputCont'>
                        <input
                            className={!inputTouched ? '' : 'touched'} 
                            id='email' 
                            type='email'
                            onChange={(e)=>changeValue('email', e.target.value)} 
                            value={formValue['email']}
                        />
                        <label for='email'>Email</label>
                    </div>
                    <div className='inputCont'>
                        <input
                            className={!inputTouched ? '' : 'touched'} 
                            id='phone' 
                            type='tel'
                            onChange={(e)=>changeValue('phone', e.target.value)} 
                            value={formValue['phone']}
                        />
                        <label for='phone'>Phone</label>
                    </div>
                    <div 
                        className='radioCont'
                        onChange={(e)=>changeValue('position', e.target.value)}
                    >
                        <p>Select your position</p>
                        <div>
                            <input 
                                defaultChecked
                                name='position' 
                                value='1'
                                id='front' 
                                type='radio'
                            />
                            <label for='front'>Frontend developer</label>
                        </div>
                        <div>
                            <input 
                                name='position' 
                                value='2'
                                id='back' 
                                type='radio'
                            />
                            <label for='back'>Backend developer</label>
                        </div>
                        <div>
                            <input 
                                name='position' 
                                value='3'
                                id='designer' 
                                type='radio'
                            />
                            <label for='designer'>Designer</label>
                        </div>
                        <div>
                            <input 
                                name='position' 
                                value='4'
                                id='qa' 
                                type='radio'
                            />
                            <label for='qa'>QA</label>
                        </div>
                    </div>
                    <div 
                        className='pictureCont'
                        onChange={(e)=>changeValue('position', e.target.value)}
                    >
                        <label for='picture'>Upload</label>
                        <input type='file'
                            filename={formValue['picture']} 
                            id='picture' 
                            name='avatar'
                            accept='image/png, image/jpeg'
                        />
                        {/* <div className='picPath'>{formValue['picture'] ? formValue['picture'] : 'Upload your photo'}</div> */}
                    </div>
                    <Button type='submit' name={'Sing up'} />
                </form>
            </div>
        </div>
    )
}
export default PostForm;