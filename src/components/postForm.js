import { useEffect, useState } from 'react';
import Button from '../components/button';
import PostFormRadio from './postFormRadio';
import SuccesReg from './succesReg';
import { getToken, postUser } from '../helpers/request';
import { checkValidation, emailRegEx, nameRegEx, telRegEx } from '../helpers/validation';

import '../styles/postForm.scss';


function PostForm(){

    const [ sendSuccess, setSendSuccess ] = useState(false)
    const [ token, setToken ] = useState('')
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
        let dataToSend = new FormData()
        dataToSend.append('name', formValue['name'].inputValue)
        dataToSend.append('email', formValue['email'].inputValue)
        dataToSend.append('phone', formValue['phone'].inputValue)
        dataToSend.append('position_id', formValue['position'].inputValue)
        dataToSend.append('photo', formValue['picture'].inputValue)
        postUser(dataToSend, token)
        .then((data)=>setSendSuccess(data.data.success))
    }

    useEffect(()=>{
        let newToken = async ()=>{
            let data = await getToken()
            setToken(data)
        }
        newToken()
    }, [])

    return(
        <div className='container'>
            <div className='postCont'>
                {
                    !sendSuccess
                    ? <>
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
                            <div className='telPlaceholder'>+38 (XXX) XXX - XX - XX</div>
                        </div>
                        <PostFormRadio changeHandler={changeValue} />
                        <div className='pictureCont'>
                            <label for='picture'>Upload</label>
                            <input
                                onChange={(e)=>changeValue('picture', e.target.files[0])} 
                                type='file' 
                                id='picture' 
                                name='avatar'
                                accept='image/png, image/jpeg'
                            />
                            {formValue['picture'].inputValue.name 
                                ? <div className='picPath'>
                                    {formValue['picture'].inputValue.name}
                                </div> 
                                : <div className='picPath'>Upload your photo</div>
                            }
                        </div>
                        <Button type='submit' name={'Sing up'}/>
                    </form>
                    </>
                    : <SuccesReg />
                }
            </div>
        </div>
    )
}
export default PostForm;