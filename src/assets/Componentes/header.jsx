import { Link } from 'react-router-dom';
import { useState } from "react";
import LogoHeader from '../imagens/header/newlogo.png';
import Bandeira from '../imagens/header/Brazil.png';
import './HeaderModule.css';

function Header() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  };

  return (
    <header>
      <Link to="/" onClick={scrollToTop} >
        <div className="esquerda">
          <img className="logo" src={LogoHeader} alt="Logo Sul Solidário" />
        </div>
      </Link>
      <nav className='nav-list'>
        <ul className="nav-itens">
          <li>
            <Link to='/' onClick={scrollToTop}>Início</Link>
          </li>
          <li>
            <Link to='/Categoria/OngsGerais' onClick={scrollToTop}>Onde doar</Link>
          </li>
          <li>
            <Link to='/Sobre' onClick={scrollToTop}>Sobre a Causa</Link>
          </li>
          <li>
            <Link to='/noticias' onClick={scrollToTop}>Notícias</Link>
          </li>
        </ul>
      </nav>
      <div className="direita">
        <img className="bandeira" src={Bandeira} alt="Bandeira do Brasil" />
      </div>

      <div className='Modal'>
        <div className={`icon ${active ? 'iconActive' : ''}`} onClick={toggleMenu}>
          <div className='hamburguer hamburguerIcon'></div>
        </div>
        <div className={`menu ${active ? 'menuOpen' : 'menuClose'}`}>
          <div className='list'>
            <ul className="listItems">
              <li><Link to='/' onClick={() => { scrollToTop(); closeMenu(); }}>Início</Link></li>
              <li><Link to='/Categoria/OngsGerais' onClick={() => { scrollToTop(); closeMenu(); }}>Onde doar</Link></li>
              <li><Link to='/Sobre' onClick={() => { scrollToTop(); closeMenu(); }}>Sobre a Causa</Link></li>
              <li><Link to='/Noticias' onClick={() => { scrollToTop(); closeMenu(); }}>Notícias</Link></li>
            </ul>
            <div className='logosul'>
              <img src={LogoHeader} alt="Logo da Sul Solidário" className='logo' />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
