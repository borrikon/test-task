export const nameRegEx = /^[a-zA-Z]+ [a-zA-Z]+$/;
export const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const telRegEx =  /^(?:\+38)?(0[5-9][0-9]\d{7})$/;
export function checkValidation(value, expression){
        if(value && expression !== undefined){
            return expression.test(value)
        }else{
            return
        }
}