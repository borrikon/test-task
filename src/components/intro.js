import Button from '../components/button'

import '../styles/intro.scss';

function Intro(){
    return(
        <div className='container'>
            <div className='introCont'>
                <h2>
                    Test assignment for 
                    front-end developer
                </h2>
                <p>
                    What defines a good 
                    front-end developer is 
                    one that has skilled knowledge 
                    of HTML, CSS, JS with a vast
                    understanding of User design thinking 
                    as they'll be building web interfaces 
                    with accessibility in mind. They should 
                    also be excited to learn, as the world 
                    of Front-End Development keeps evolving.
                </p>
                <Button name={'Sign up'} />
            </div>
        </div>
    )
}

export default Intro;