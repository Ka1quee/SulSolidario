import './ResetCss.css'
import './Footer.css'
import Logo from '../imagens/logo_sul.png'

function Footer() {
  return (
    <footer>
      <div className='BorderTopFooter'></div>
      <div className='Container'>
        <div>
          <ul className='ListFooter'>
            <h3 className='SubTitle'>Instituição</h3>
            <li><a href="">Sobre a causa</a></li>
            <li><a href="">ONGs</a></li>
            <li><a href="">Desaparecidos</a></li>
            <li><a href="">Notícias</a></li>
          </ul>
        </div>
        <div>
          <ul className='ListFooter'>
            <h3 className='SubTitle'>Doações</h3>
            <li><a href="">Resgate</a></li>
            <li><a href="">Animais</a></li>
            <li><a href="">Alimentos</a></li>
            <li><a href="">Apoio Emocional</a></li>
            <li><a href="">Suprimentos Médicos</a></li>
            <li><a href="">Vestimentas</a></li>
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
