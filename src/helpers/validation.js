export const nameRegEx = /^[a-zA-Z]+ [a-zA-Z]+$/;
export const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const telRegEx =  /^[\+]{0,1}380([0-9]{9})$/;
export function checkValidation(value, expression){
        if(value && expression !== undefined){
            return expression.test(value)
        }else{
            return
        }
}