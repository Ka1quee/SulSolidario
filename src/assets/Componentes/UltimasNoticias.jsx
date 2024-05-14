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

                <CardNoticia titulo="Chuva volta a cair no Rio Grande do Sul e gera preocupação | Brasil Urgente"
                    video="https://www.youtube.com/embed/vVep0rFyfgI?si=HTJOQYHLU9Woefp7"
                    linkNoticia="https://www.youtube.com/watch?v=vVep0rFyfgI" />


                <CardNoticia titulo="Sobe para 136 o número de mortos no Rio Grande do Sul"
                    video="https://www.youtube.com/embed/bYX74YUfqm8?si=CQrt8uAjs8lJPv0b"
                    linkNoticia="https://www.youtube.com/watch?v=bYX74YUfqm8" />

                <CardNoticia titulo="Inundações no Rio Grande do Sul: a cronologia da maior tragédia ambiental do Estado"
                    video="https://www.youtube.com/embed/JIosqudY9aM?si=V-H6os2igsEN0oBB"
                    linkNoticia="https://www.youtube.com/watch?v=JIosqudY9aM" />

                <CardNoticia titulo="Rio Grande do Sul tem alertas para inundações e deslizamentos"
                    video="https://www.youtube.com/embed/eOP3_79c8mg?si=39RdqC122bB_f0it"
                    linkNoticia="https://www.youtube.com/watch?v=eOP3_79c8mg" />

            </div>

            <Link to='/Noticias' className='BtnMostrarMais'>Ver mais</Link>
        </aside>
    )
}

export default UltimasNoticias