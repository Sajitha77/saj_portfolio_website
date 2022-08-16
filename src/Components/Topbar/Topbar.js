import './topbar.scss'

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Saj Polwatta</a>
                    <div className='itemContainer'>
                        <a href='"https://www.linkedin.com/in/sajpolwatta/'>
                            <img src="assets/Linkedin-logo.svg" alt="LinkedIn logo/link to linkedin profile"></img>
                         </a>
                    </div>
                    <div className='itemContainer'>
                        <a href='"https://github.com/Sajitha77'>
                            <img src="assets/github-logo.svg" alt="LinkedIn logo/link to linkedin profile"></img>
                        </a>
                    </div>
                    <div className='itemContainer'>
                        <a href='"#contact'>
                            <img src="assets/Contact-logo.svg" alt="LinkedIn logo/link to linkedin profile"></img>
                        </a>
                    </div>
                    
                    
                   
                </div>
                <div className='right'>
                    <div className='navMenu' onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>

                    </div>

                </div>
            </div>
        </div>
    )
}
