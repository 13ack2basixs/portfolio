import './About.css'

const about = () => {
    return (
        <div className='about-container'> 
            <h2 id='about'>About Me</h2>
            <div className='about-para-container'>
                <p className='intro'>Welcome to my website! I am Hong Wei, a Business Analytics undergraduate at <a className='nus-link' href='https://www.nus.edu.sg/' target='_blank'>NUS</a>. I love coding software to help people and dealing with complex data!</p>
            </div>    
        </div>
    )
}

export default about;