import './ResetCss.css'
import './Footer.css'
import Logo from '../imagens/logo_sul.png'
import Insta from '../imagens/instagram.png'
import LinkedIN from '../imagens/linkedin.png'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer>
      <div className='BorderTopFooter'></div>
      <div className='Container'>
        <div>
          <ul className='ListFooter'>
            <h3 className='SubTitle'>Institucional</h3>
            <li><Link to='/Sobre'>Sobre a causa</Link></li>
            <li><Link to='/Categoria/ongsGerais'>ONGs</Link></li>
            <li><Link to='/Noticias'>Noticias</Link></li>
          </ul>
          <div className='ResponsiveRoll'></div>
        </div>
        <div>
          <ul className='ListFooter'>
            <h3 className='SubTitle'>Doações</h3>
            <li><Link to='/Categoria/ongsGerais'>ONGS Gerais</Link></li>
            <li><Link to='/Categoria/resgate'>Resgate</Link></li>
            <li><Link to='/Categoria/animais'>Animais</Link></li>
            <li><Link to='/Categoria/alimentos'>Alimentos</Link></li>
            <li><Link to='/Categoria/vestimentas'>Vestimentas</Link></li>
          </ul>
          <div className='ResponsiveRoll'></div>
        </div>
        <div className='BoxImage'>
          <img src={Logo} alt="Logo da sul solidário" className='logo' />
          <div>
            <a href=""><img src={Insta} alt="Logo do Insta" /></a>
            <a href=""><img src={LinkedIN} alt="Logo do LinkedIN" /></a>
          </div>
        </div>
      </div>
      <p className='Copy'>Copyright ©️ 2024, Sul Solidário - Todos direitos reservados</p>
    </footer>
  )
}

export default Footer
