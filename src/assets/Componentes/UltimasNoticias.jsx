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
            <h1 className="titulo"> Últimas notícias</h1>

            <h2 className='SubTitleNoticias'>Confira as ultimas notícias</h2>
            <div className='ContainerNoticias'>
                <NoticiaDestaque
                    linkNoticia="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC" />

                <CardNoticia titulo="Lula fala ao vivo sobre situação do Rio Grande do Sul, planos do governo e mais; assista"
                    video="https://www.youtube.com/embed/3SWVRrLOaSs?si=PqMU4BIFbhxG_4bN"
                    linkNoticia="https://www.youtube.com/watch?v=3SWVRrLOaSs" />

                <CardNoticia titulo="Últimas informações sobre a enchente no Rio Grande do Sul | Rádio Gaúcha | 09/05/2024"
                    video="https://www.youtube.com/embed/idnNAssVetk?si=j64_1B4fgKcBacRu"
                    linkNoticia="https://www.youtube.com/watch?v=idnNAssVetk" />

                <CardNoticia titulo="AO VIVO: Acompanhe as principais notícias do dia na Record News"
                    video="https://www.youtube.com/embed/mgJTRKTYReA?si=blS7JM-UNYkll22w"
                    linkNoticia="https://www.youtube.com/watch?v=mgJTRKTYReA" />

                <CardNoticia titulo="Saiba as últimas notícias sobre a tragédia no Rio Grande do Sul #riograndedosul"
                    video="https://www.youtube.com/embed/YfCAIAVePBo?si=FDOhBB6hXrsxIZQp"
                    linkNoticia="https://www.youtube.com/watch?v=YfCAIAVePBo" />



            </div>

            <Link to='/Noticias' className='BtnMostrarMais'>Ver mais</Link>
        </aside>
    )
}

export default UltimasNoticias