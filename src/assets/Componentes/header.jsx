import './HeaderModule.css'
import Bandeira from '../imagens/header/Brazil.png'
import LogoHeader from '../imagens/header/Logo_Header.png'

function Header(){
    return(
    <header>
        <div className="esquerda">
        <img className="logo" src={LogoHeader} alt="Logo Sul Solidário" />
        </div>
        <ul className="nav-Header">
            <li>Início</li>
            <li>Onde doar</li>
            <li>Sobre a Causa</li>
            <li>Notícias</li>
        </ul>
        <div className="direita">
            <img  className="bandeira" src={Bandeira} alt="Bandeira do Brasil" />
        </div>
    </header>
    )
}
export default Header