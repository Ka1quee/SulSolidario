import './ResetCss.css'
import './Footer.css'
import Logo from '../imagens/logo_sul.png'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <footer>
      <div className=''></div>
      <div className='Container'>
        <div>
          <ul className='ListFooter'>
            <h3 className='SubTitle'>Instituição</h3>
            <li><Link to='/Sobre'>Sobre a causa</Link></li>
            <li><Link to='/Categoria/animais'>Ongs</Link></li>
            <li><Link to='/Noticias'>Noticias</Link></li>
          </ul>
        </div>
        <div>
          <ul className='ListFooter'>
            <h3 className='SubTitle'>Doações</h3>
            <li><Link to='/Categoria/ongsGerais'>ONGS Gerais</Link></li>
            <li><Link to='/Categoria/resgate'>Resgate</Link></li>
            <li><Link to='/Categoria/animais'>Animais</Link></li>
            <li><Link to='/Categoria/resgate'>Alimentos</Link></li>
            <li><Link to='/Categoria/vestimentas'>Vestimentas</Link></li>
          </ul>
        </div>
        <div className='BoxImage'>
          <img src={Logo} alt="Logo da sul solidário" className='logo' />
        </div>
      </div>
      <p className='Copy'>Copyright ©️ 2024, Sul Solidário - Todos direitos reservados</p>
    </footer>
  )
}

export default Footer
