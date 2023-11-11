import './intro.scss'

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='leftWrapper'>
                    <h2>About Me</h2>
                    <p>
                    I'm currently a 3rd year Computer Science and Mathematics student at Carleton University, Ottawa. Beyond my academic pursuits, I'm employed at the Department of National Defense as an Interoperability and Cloud Developer.
                    </p>
                     <p>
                    Outside of work and studies, I'm passionate about sports and have a deep love for coding. It's more than just a profession for me, it's a hobby and a passion.
                    </p>
                    <div className='imageContainer'>
                    <img src='/assets/profile.jpg' alt='profile'></img>
                    </div>
                
                </div>
            </div>

            <div className='right'>
                <div className='rightWrapper'>
                    <h2>Hi There! I am</h2>
                    <h1>Saj Polwatta!</h1>
                    <h3>Software Devloper</h3>
                </div>
                <a href='#portfolio'>
                    <img src='/assets/down.png' alt='down' />

                    
                </a>
            </div>
        </div>
    )
}