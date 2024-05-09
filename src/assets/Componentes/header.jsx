import { Link } from 'react-router-dom'

import './HeaderModule.css'
import Bandeira from '../imagens/header/Brazil.png'
import LogoHeader from '../imagens/header/Logo_Header.png'

function Header() {
    return (
        <header>
            <Link to="/">
        <div className="esquerda">
          <img className="logo" src={LogoHeader} alt="Logo Sul Solidário" />
        </div>
        </Link>
        {/* Menu de navegação */}
        <nav className='nav-list'>
          <ul className="nav-itens">
          <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/Categoria/animais'>Onde doar</Link>
                </li>

                <li>
                    <Link to='/Sobre'>Sobre a Causa</Link>
                </li>

                <li>
                    <Link to='/Noticias'>Noticias</Link>
                </li>
          </ul>
        </nav>
  
        <div className="direita">
          <img className="bandeira" src={Bandeira} alt="Bandeira do Brasil" />
        </div>
      </header>
    )
}
export default Header