import 'cirrus-ui'

export default function Header() {
    return (
        <div class='header header-fixed unselectable header-animated'>
            <div class='header-brand'>
                <div class='nav-item no-hover'>
                    <h6 class='title' href='/' >Gruta do Jamal</h6>
                </div>
                <div class='nav-item nav-btn' id='header-btn'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class='header-nav' id='header-menu' >
                <div class='nav-left'>
                    <div class="nav-item text-center"> 
                        <a href="https://github.com/GamerSenior" target='_blank'> 
                            <span class="icon"> 
                                <i class="fab fa-wrapper fa-github" aria-hidden="true"></i> 
                            </span> 
                        </a> 
                    </div>

                    <div class="nav-item text-center"> 
                        <a href="https://twitter.com/JamalIsBaad" target='_blank'> 
                            <span class="icon"> 
                                <i class="fab fa-wrapper fa-twitter" aria-hidden="true"></i> 
                            </span> 
                        </a> 
                    </div>

                    <div class="nav-item text-center"> 
                        <a href="https://instagram.com/giovaniabel" target='_blank'> 
                            <span class="icon"> 
                                <i class="fab fa-wrapper fa-instagram" aria-hidden="true"></i> 
                            </span> 
                        </a> 
                    </div>
                </div>

                <div class='nav-right'>
                    <div class='nav-item has-sub toggle-hover' id='dropdown'>
                        <a class='nav-dropdown-link'>Menu</a>
                        <ul class='dropdown-menu dropdown-animated' role='menu' >
                            <li role='menu-item'><a href='#'>Teste 1</a></li>
                            <li role='menu-item'><a href='#'>Teste 2</a></li>
                            <li role='menu-item'><a href='#'>Teste 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
