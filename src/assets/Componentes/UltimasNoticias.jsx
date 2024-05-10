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

<CardNoticia titulo="Inundações no Rio Grande do Sul: a cronologia da maior tragédia ambiental do Estado"
                        video="https://www.youtube.com/embed/JIosqudY9aM?si=V-H6os2igsEN0oBB"
                        linkNoticia="https://www.youtube.com/watch?v=JIosqudY9aM" />

                    <CardNoticia titulo="Policiais reforçam equipes de salvamento para evitar assaltos no Rio Grande do Sul | Jornal da Band"
                        video="https://www.youtube.com/embed/UxnyJR9mYyc?si=zwG_mfqsP9Ijn8x7"
                        linkNoticia="https://www.youtube.com/watch?v=UxnyJR9mYyc" />

                    <CardNoticia titulo="Enchente no Rio Grande do Sul: Água baixa em Lajeado e moradora grava ‘dia de recomeços’; veja vídeo"
                        video="https://www.youtube.com/embed/E1EG0gD-Ekc?si=qvz1FxxKIbDuYVUG"
                        linkNoticia="https://www.youtube.com/watch?v=E1EG0gD-Ekc" />

                    <CardNoticia titulo="Saiba as últimas notícias sobre a tragédia no Rio Grande do Sul #riograndedosul"
                        video="https://www.youtube.com/embed/YfCAIAVePBo?si=FDOhBB6hXrsxIZQp"
                        linkNoticia="https://www.youtube.com/watch?v=YfCAIAVePBo" />




            </div>

            <Link to='/Noticias' className='BtnMostrarMais'>Ver mais</Link>
        </aside>
    )
}

export default UltimasNoticias