export default function scroll(e){
    let target = [];
    let name = e.target.innerText;
    if(name === 'Users'){
        target = document.getElementsByClassName('usersTitle')
    }
    if(name === 'Sign up'){
        target = document.getElementsByClassName('postCont')
    }
    window.scrollBy({
        top: target[0].getBoundingClientRect().top,
        behavior: 'smooth'
    })
}