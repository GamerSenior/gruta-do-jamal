import 'cirrus-ui'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className='header header-fixed unselectable header-animated bg-dark'>
            <div className='header-brand'>
                <div className='nav-item no-hover'>
                    <a href='/'><div className='logo'>Gruta do Jamal</div></a>
                </div>
                <div className={'nav-item nav-btn ' + (menuActive ? 'active ' : '') } 
                    id='header-btn' onClick={() => setMenuActive(!menuActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className={'header-nav ' + (menuActive ? 'active ' : '')} id='header-menu'>
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
                        <ul className='dropdown-menu dropdown-animated bg-dark u-shadow' style={{border: 0}} role='menu' >
                            <li role='menu-item'><a href='/posts'>Blog</a></li>
                            <li role='menu-item'><a href='/about'>Sobre mim</a></li>
                            <li role='menu-item'><a href='#'>Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
                a {
                    color: white
                }

                .logo {
                    font-family: 'Orbitron';
                    font-size: 32px;
                }
            `}
            </style>
        </div>
    )
}
