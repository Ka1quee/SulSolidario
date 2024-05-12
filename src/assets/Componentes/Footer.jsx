import './ResetCss.css'
import './Footer.css'
import Logo from '../imagens/footerlogo.png'
import Insta from '../imagens/instagram.png'
import LinkedIN from '../imagens/linkedin.png'
import beacons from '../imagens/beacons.png'
import { Link } from 'react-router-dom'
import Politica from '../../assets/imagens/ongs/politica.pdf'
function Footer() {
  return (
    <footer>
      <div className='BorderTopFooter'></div>
      <div className='Container'>
        <div>
          <ul className='ListFooter'>
            <h3 className='SubTitle'>Institucional</h3>
            <li><a href={Politica} target="_blank" rel="noopener noreferrer">Políticas de Privacidade</a></li>
            <li><Link to='/Sobre'onClick={scrollToTop}>Sobre a causa</Link></li>
            <li><Link to='/Categoria/ongsGerais'onClick={scrollToTop}>ONGs</Link></li>
            <li><Link to='/Noticias'onClick={scrollToTop}>Noticias</Link></li>
          </ul>
          <div className='ResponsiveRoll'></div>
        </div>
        <div>
          <ul className='ListFooter'>
            <h3 className='SubTitle'>Doações</h3>
            <li><Link to='/Categoria/ongsGerais' onClick={scrollToTop}>ONGS Gerais</Link></li>
            <li><Link to='/Categoria/hospitalar'onClick={scrollToTop}>Hospitalar</Link></li>
            <li><Link to='/Categoria/animais'onClick={scrollToTop}>Animais</Link></li>
            <li><Link to='/Categoria/alimentos'onClick={scrollToTop}>Alimentos</Link></li>
            <li><Link to='/Categoria/vestimentas'onClick={scrollToTop}>Vestimentas</Link></li>
          </ul>
          <div className='ResponsiveRoll'></div>
        </div>
        <div className='BoxImage'>
          <img src={Logo} alt="Logo da sul solidário" className='logo' />
          <div className='social_media'>
            <a href="https://www.instagram.com/sulsolidario_oficial/"target='_blank'><img src={Insta} alt="Logo do Insta" /></a>
            <a href="https://www.linkedin.com/company/sul-solidario/" target='_blank'><img src={LinkedIN} alt="Logo do LinkedIN" /></a>
            <a href="https://beacons.ai/sulsolidario" target='_blank'><img src={beacons} alt="Logo do LinkedIN" className='beacons' /></a>
          </div>
        </div>
      </div>
      <p className='Copy'>Copyright ©️ 2024, Sul Solidário - Todos direitos reservados</p>
    </footer>
  )
}

export default Footer
