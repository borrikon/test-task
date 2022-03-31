import { useState } from 'react';
import Button from '../components/button';
import { checkValidation, emailRegEx, nameRegEx, telRegEx } from '../helpers/validation';

import '../styles/postForm.scss';
import PostFormRadio from './postFormRadio';

function PostForm(){

    const [ formValue, setFormValue ] = useState({
       'name': {
           inputValue: '',
           isTouched: false,
           valid: false 
        },
       'email': {
            inputValue: '',
            isTouched: false,
            valid: false 
        },
       'phone':{
            inputValue: '',
            isTouched: false,
            valid: false 
        }, 
       'position': {
            inputValue: '',
            isTouched: false,
            valid: false 
        },
       'picture': {
            inputValue: '',
            isTouched: false,
            valid: false 
        },
    })

    function changeValue(fildName, value){        
        let updatedValue = {...formValue}
        updatedValue[fildName].inputValue = value
        updatedValue[fildName].isTouched = true
        switch(fildName){
            case  'name':
                if(checkValidation(value, nameRegEx)){
                    updatedValue[fildName].valid = true
                }
                setFormValue({...formValue, ...updatedValue})
            break;
            case  'email':
                if(checkValidation(value, emailRegEx)){
                    updatedValue[fildName].valid = true
                }
                setFormValue({...formValue, ...updatedValue})
            break;
            case  'phone':
                if(checkValidation(value, telRegEx)){
                    updatedValue[fildName].valid = true
                }
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

    function submitHandler(e){
       e.preventDefault()
       console.log(formValue)
    }

    return(
        <div className='container'>
            <div className='postCont'>
                <h2>Working with POST request</h2>
                <form onSubmit={(e)=>submitHandler(e)}>
                    <div className={(!formValue['name'].valid && formValue['name'].isTouched) ? 'inputCont error' : 'inputCont'}>
                        <input
                            className={formValue['name'].isTouched ? 'touched' : ''} 
                            id='name' 
                            type='text' 
                            onChange={(e)=>changeValue('name', e.target.value)} 
                            value={formValue['name'].inputValue}
                        />
                        <label for='name'>Your name</label>
                    </div>
                    <div className={(!formValue['email'].valid && formValue['email'].isTouched) ? 'inputCont error' : 'inputCont'}>
                        <input
                            className={formValue['email'].isTouched ? 'touched' : ''} 
                            id='email' 
                            type='email'
                            onChange={(e)=>changeValue('email', e.target.value)} 
                            value={formValue['email'].inputValue}
                        />
                        <label for='email'>Email</label>
                    </div>
                    <div className={(!formValue['phone'].valid && formValue['phone'].isTouched) ? 'inputCont error' : 'inputCont'}>
                        <input
                            className={formValue['phone'].isTouched ? 'touched' : ''} 
                            id='phone' 
                            type='tel'
                            onChange={(e)=>changeValue('phone', e.target.value)} 
                            value={formValue['phone'].inputValue}
                        />
                        <label for='phone'>Phone</label>
                    </div>
                    <PostFormRadio changeHandler={changeValue} />
                    <div 
                        className='pictureCont'
                        onChange={(e)=>changeValue('picture', e.target.value)}
                    >
                        <label for='picture'>Upload</label>
                        <input type='file'
                            filename={formValue['picture'].inputValue} 
                            id='picture' 
                            name='avatar'
                            accept='image/png, image/jpeg'
                        />
                        {formValue['picture'].inputValue 
                            ? <div className='picPath'>{formValue['picture'].inputValue}</div> 
                            : <div className='picPath'>Upload your photo</div>
                        }
                    </div>
                    <Button type='submit' name={'Sing up'} />
                </form>
            </div>
        </div>
    )
}
export default PostForm;