import './intro.scss'

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imageContainer'>
                    <img src='assets/profile.jpg' alt='profile'></img>
                </div>
            </div>

            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There! I am</h2>
                    <h1>Saj Polwatta!</h1>
                    <h3>Computer Science Student at Carleton University</h3>
                </div>
                <a href='#portfolio'>
                    <img src='assets/down.png' alt='down'></img>
                    
                </a>
            </div>
        </div>
    )
}