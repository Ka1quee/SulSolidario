import './ResetCss.css'
import './Footer.css'
import Logo from '../imagens/footerlogo.png'
import Insta from '../imagens/instagram.png'
import LinkedIN from '../imagens/linkedin.png'
import beacons from '../imagens/beacons.png'
import { Link } from 'react-router-dom'
import Politica from '../../assets/imagens/ongs/politica.pdf'
function Footer() {

  const handleClick = (route) => {
    window.location.href = route; // Redireciona para a rota passada como parâmetro
  };

  return (
    <footer>
      <div className='BorderTopFooter'></div>
      <div className='Container'>
        <div>
          <ul className='ListFooter'>
            <h3 className='SubTitle'>Institucional</h3>
            <li ><a href={Politica} target="_blank" rel="noopener noreferrer">Políticas de Privacidade</a></li>
            <li onClick={() => handleClick('/Sobre')}><Link to='/Sobre'>Sobre a causa</Link></li>
            <li onClick={() => handleClick('/Categoria/ongsGerais')}><Link to='/Categoria/ongsGerais'>ONGs</Link></li>
            <li onClick={() => handleClick('/Noticias')}><Link to='/Noticias'>Noticias</Link></li>
          </ul>
          <div className='ResponsiveRoll'></div>
        </div>
        <div>
          <ul className='ListFooter'>
            <h3 className='SubTitle'>Doações</h3>
            <li onClick={() => handleClick('/Categoria/ongsGerais')}><Link to='/Categoria/ongsGerais'>ONGS Gerais</Link></li>
            <li onClick={() => handleClick('/Categoria/hospitalar')}><Link to='/Categoria/hospitalar'>Hospitalar</Link></li>
            <li onClick={() => handleClick('/Categoria/animais')}><Link to='/Categoria/animais'>Animais</Link></li>
            <li onClick={() => handleClick('/Categoria/alimentos')}><Link to='/Categoria/alimentos'>Alimentos</Link></li>
            <li onClick={() => handleClick('/Categoria/vestimentas')}><Link to='/Categoria/vestimentas'>Vestimentas</Link></li>
          </ul>
          <div className='ResponsiveRoll'></div>
        </div>
        <div className='BoxImage'>
          <img src={Logo} alt="Logo da sul solidário" className='logo' />
          <div className='social_media'>
            <a href="https://www.instagram.com/sulsolidario_oficial/" target='_blank' rel="noopener noreferrer"><img src={Insta} alt="Logo do Insta" /></a>
            <a href="https://www.linkedin.com/company/sul-solidario/" target='_blank' rel="noopener noreferrer"><img src={LinkedIN} alt="Logo do LinkedIN" /></a>
            <a href="https://beacons.ai/sulsolidario" target='_blank' rel="noopener noreferrer"><img src={beacons} alt="Logo do LinkedIN" className='beacons' /></a>
          </div>
        </div>
      </div>
      <p className='Copy'>Copyright ©️ 2024, Sul Solidário - Todos direitos reservados</p>
    </footer>
  )
}

export default Footer
