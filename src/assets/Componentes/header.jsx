import { Link } from 'react-router-dom';
import {useState} from "react";
import Logo from '../imagens/logo_sul.png'
import './HeaderModule.css'
import Bandeira from '../imagens/header/Brazil.png';
import LogoHeader from '../imagens/header/Logo_Header.png';

function Header() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  }

  return (
    <header>
      <Link to="/">
        <div className="esquerda">
          <img className="logo" src={LogoHeader} alt="Logo Sul Solidário" />
        </div>
      </Link>
      <nav className='nav-list'>
        <ul className="nav-itens">
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/Categoria/OngsGerais'>Onde doar</Link>
          </li>

          <li>
            <Link to='/Sobre'>Sobre a Causa</Link>
          </li>

          <li>
            <Link to='/Noticias'>Notícias</Link>
          </li>
        </ul>
      </nav>
      <div className="direita">
        <img className="bandeira" src={Bandeira} alt="Bandeira do Brasil" />
      </div>

      <div className='Modal'>
        <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
          <div className='hamburguer hamburguerIcon'></div>
        </div>
        <div className={active ?  "menu , menuOpen" : "menu , menuClose"}>
          <div className='list'>
        <ul className="listItems">
          <li><Link to='/'>Início</Link></li>
          <li> <Link to='/Categoria/animais'>Onde doar</Link></li>
          <li><Link to='/Sobre'>Sobre a Causa</Link></li>
          <li><Link to='/Noticias'>Noticias</Link></li>
          <div className='logosul'>
          <img src={LogoHeader} alt="Logo da sul solidário" className='logo' />
        </div>
        </ul>
      </div>
      </div>
      </div>
    </header>
  )
}

export default Header