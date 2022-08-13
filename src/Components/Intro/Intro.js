import './intro.scss'

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='leftWrapper'>
                    <h1>Welcome!</h1>
                    <h2>Explore and get to know me!</h2>
                </div>
            </div>

            <div className='right'>
                <div className='rightWrapper'>
                    <h2>Hi There! I am</h2>
                    <h1>Saj Polwatta!</h1>
                    <h3>Software Devloper</h3>
                </div>
                <a href='#portfolio'>
                    <img src='assets/down.png' alt='down'></img>
                    
                </a>
            </div>
        </div>
    )
}