import 'cirrus-ui'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='header header-fixed unselectable header-animated'>
            <div className='header-brand'>
                <div className='nav-item no-hover'>
                    <a href='/'><h6>Gruta do Jamal</h6></a>
                </div>
                <div className='nav-item nav-btn' id='header-btn'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className='header-nav' id='header-menu' >
                <div className='nav-left'>
                    <div className="nav-item text-center"> 
                        <a href="https://github.com/GamerSenior" target='_blank'> 
                            <span className="icon"> 
                                <i className="fab fa-wrapper fa-github" aria-hidden="true"></i> 
                            </span> 
                        </a> 
                    </div>

                    <div className="nav-item text-center"> 
                        <a href="https://twitter.com/JamalIsBaad" target='_blank'> 
                            <span className="icon"> 
                                <i className="fab fa-wrapper fa-twitter" aria-hidden="true"></i> 
                            </span> 
                        </a> 
                    </div>

                    <div className="nav-item text-center"> 
                        <a href="https://instagram.com/giovaniabel" target='_blank'> 
                            <span className="icon"> 
                                <i className="fab fa-wrapper fa-instagram" aria-hidden="true"></i> 
                            </span> 
                        </a> 
                    </div>
                </div>

                <div className='nav-right'>
                    <div className='nav-item has-sub toggle-hover' id='dropdown'>
                        <a className='nav-dropdown-link'>Menu</a>
                        <ul className='dropdown-menu dropdown-animated' role='menu' >
                            <li role='menu-item'><a href='#'>Blog</a></li>
                            <li role='menu-item'><Link href='/about'>Sobre mim</Link></li>
                            <li role='menu-item'><a href='#'>Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
