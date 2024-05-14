import './ResetCss.css'
import './UltimasNoticias.css'
import NoticiaImg from '../imagens/home/NoticiaImg.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CardNoticia from './CardNoticia'
import NoticiaDestaque from './NoticiaDestaque'

function UltimasNoticias() {
    
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true);

    document.getElementsByClassName('BtnMostrarMais').innerHTML = "Mostrar menos"
    return (
        <aside>
            <h1 className="titulo"> Últimas <span className='title'>notícias</span></h1>

            <h2 className='SubTitleNoticias'>Confira as ultimas notícias</h2>
            <div className='ContainerNoticias'>
                <NoticiaDestaque
                    linkNoticia="https://g1.globo.com/rs/rio-grande-do-sul/" />

<CardNoticia titulo="Pelotas (RS) decreta estado de calamidade pública | CNN PRIME TIME"
                        video="https://www.youtube.com/embed/M3hfuUNt9hw?"
                        linkNoticia="https://youtu.be/M3hfuUNt9hw" />

                    <CardNoticia titulo="Nível do Guaíba volta a subir em Porto Alegre (RS) e deve superar recorde histórico"
                        video="https://www.youtube.com/embed/Z24ANjgMnZs?"
                        linkNoticia="https://www.youtube.com/embed/Z24ANjgMnZs" />

                    <CardNoticia titulo="Tremores de terra são sentidos por moradores de Caxias do Sul (RS)"
                        video="https://www.youtube.com/embed/ULWHRyUM1V0?si=2FVS2219LpGM6FHp"
                        linkNoticia="https://www.youtube.com/watch?v=ULWHRyUM1V0" />

                    <CardNoticia titulo="Biden diz que EUA estão em contato com o Brasil por enchentes no Rio Grande do Sul; Padilha analisa"
                        video="https://www.youtube.com/embed/7SKE5dKLEHM?si=DzMfZ-Tn4ZCQbVfn"
                        linkNoticia="https://www.youtube.com/watch?v=7SKE5dKLEHM" />

            </div>

            <Link to='/Noticias' className='BtnMostrarMais'>Ver mais</Link>
        </aside>
    )
}

export default UltimasNoticias