import './ResetCss.css'
import './UltimasNoticias.css'
import NoticiaImg from '../imagens/home/NoticiaImg.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function UltimasNoticias() {
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true);

    document.getElementsByClassName('BtnMostrarMais').innerHTML="Mostrar menos"
    return (
        <aside>
            <h2 className='SubTitleNoticias'>Confira as ultimas notícias</h2>
             <div className='ContainerNoticias'>
                <a href="" className='LargeNoticia1'>
                    <div className='StyleNoticia'>
                        <div className='BoxImg'><img src={NoticiaImg} alt="Imagem de pessoas presas no trelhado em Rio Grande do Sul" /></div>
                        <p>Rio Grande do Sul ainda está em perigo pelas aguas aiaiaiaiaia</p>
                    </div>
                </a>
                <a href="" className='Noticia1'>
                    <div className='StyleNoticia'>
                        <div className='BoxImg'><img src={NoticiaImg} alt="Imagem de pessoas presas no trelhado em Rio Grande do Sul" /></div>
                        <p>Rio Grande do Sul ainda está em perigo pelas aguas aiaiaiaiaia</p>
                    </div>
                </a>
                <a href="" className='Noticia2'>
                    <div className='StyleNoticia'>
                        <div className='BoxImg'><img src={NoticiaImg} alt="Imagem de pessoas presas no trelhado em Rio Grande do Sul" /></div>
                        <p>Rio Grande do Sul ainda está em perigo pelas aguas aiaiaiaiaia</p>
                    </div>
                </a>
                <a href="" className='Noticia3'>
                    <div className='StyleNoticia' >
                        <div className='BoxImg'><img src={NoticiaImg} alt="Imagem de pessoas presas no trelhado em Rio Grande do Sul" /></div>
                        <p>Rio Grande do Sul ainda está em perigo pelas aguas aiaiaiaiaia</p>
                    </div>
                </a>
                <a href="" className='Noticia4'>
                    <div className='StyleNoticia'>
                        <div className='BoxImg'><img src={NoticiaImg} alt="Imagem de pessoas presas no trelhado em Rio Grande do Sul" /></div>
                        <p>Rio Grande do Sul ainda está em perigo pelas aguas aiaiaiaiaia</p>
                    </div>
                </a>


            </div>

            <Link to='/Noticias' className='BtnMostrarMais'>Ver mais</Link>
        </aside>
    )
}

export default UltimasNoticias