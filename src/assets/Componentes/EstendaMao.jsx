import './ResetCss.css'
import './EstendaMao.css'
import Resgate from '../imagens/ong.png'
import Animais from '../imagens/home/animais.png'
import Alimento from '../imagens/home/alimento.png'
import Roupas from '../imagens/alimentos.png'
import Remedio from '../imagens/home/supre.png'
import Apoio from '../imagens/home/apoio.png'
import { Link } from 'react-router-dom'

function EstendaMao() {
    return (
        <section className="EstendaMao">
            <div className="fundo">
                <h1 className="estenda"> Estenda a Mão</h1>
                <h2 className="sub">Encontre as principais ONGs que estão ajudando</h2>
                <div className="comp">

                    <Link to="/Categoria/ongsGerais">
                        <div className="secao">
                            <div className='BoxImg'>
                                <img className="img" src={Resgate} alt="Resgate" />
                            </div>
                            <p className="text" >ONGs gerais</p>
                        </div>
                    </Link>

                    <Link to="/Categoria/animais">
                        <div className="secao">
                            <div className='BoxImg'>
                                <img className="img" src={Animais} alt="Resgate" />
                            </div>
                            <p className="text" >Animais </p>

                        </div>
                    </Link>

                    <Link to="/Categoria/alimentos">
                        <div className="secao">
                            <div className='BoxImg'>
                                <img className="img" src={Alimento} alt="Resgate" />
                            </div>
                            <p className="text" >Alimentos</p>
                        </div>
                    </Link>

                    <Link to="/Categoria/vestimentas">

                        <div className="secao">
                            <div className='BoxImg'>
                                <img className="img" src={Roupas} alt="Resgate" />
                            </div>
                            <p className="text" >Vestimentas</p>
                        </div>
                    </Link>


                    <Link to="/Categoria/hospitalar">
                        <div className="secao">
                            <div className='BoxImg'>
                                <img className="img" src={Remedio} alt="Resgate" />
                            </div>
                            <p className="text" >Hospitalar</p>
                        </div>
                    </Link>



                </div>

                <Link to='/Categoria/ongsGerais' className='BtnMostrarMais'>Ver mais</Link>
            </div>
        </section>

    )
}

export default EstendaMao
