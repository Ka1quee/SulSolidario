import { Link } from 'react-router-dom';
import {useState} from "react";
import Logo from '../imagens/logo_sul.png'
import './HeaderModule.css'
import Bandeira from '../imagens/header/Brazil.png';
import LogoHeader from '../imagens/header/newlogo.png';

function Header() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  }

  return (
    <header>
      <Link to="/" onClick={scrollToTop}>
        <div className="esquerda">
          <img className="logo" src={LogoHeader} alt="Logo Sul Solidário" />
        </div>
      </Link>
      <nav className='nav-list'>
        <ul className="nav-itens">
          <li>
            <Link to='/'onClick={scrollToTop}>Inicio</Link>
          </li>
          <li>
            <Link to='/Categoria/OngsGerais'onClick={scrollToTop}>Onde doar</Link>
          </li>

          <li>
            <Link to='/Sobre'onClick={scrollToTop}>Sobre a Causa</Link>
          </li>

          <li>
            <Link to='/Noticias'onClick={scrollToTop}>Notícias</Link>
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
          <li><Link to='/' onClick={scrollToTop}>Início</Link></li>
          <li> <Link to='/Categoria/ongsGerais' onClick={scrollToTop}>Onde doar</Link></li>
          <li><Link to='/Sobre' onClick={scrollToTop}>Sobre a Causa</Link></li>
          <li><Link to='/Noticias' onClick={scrollToTop}>Noticias</Link></li>
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