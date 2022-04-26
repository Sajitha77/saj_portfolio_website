import './topbar.scss'
import {VscColorMode} from 'react-icons/vsc'

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Saj Polwatta</a>
                    <div className='colorMode'>
                        <VscColorMode/>
                            <span>DarkMode</span>
                    </div>
                </div>
                <div className='right'>

                </div>
            </div>
        </div>
    )
}
