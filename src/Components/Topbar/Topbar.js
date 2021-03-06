import './topbar.scss'
import {VscColorMode} from 'react-icons/vsc'

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Saj Polwatta</a>
                    <div className='colorMode'>
                        <VscColorMode className='colorIcon'/>
                            <span>Lightmode/Darkmode</span>
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
