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

                <CardNoticia titulo="Nível do rio Guaíba começa a baixar no Rio Grande do Sul"
                    video="https://www.youtube.com/embed/KgGHO9KW2uE?si=q4b2RGsqYCXcl_Du"
                    linkNoticia="https://www.youtube.com/watch?v=KgGHO9KW2uE" />

                <CardNoticia titulo="'Mar de carros' no Rio Grande do Sul: o que será feito com os veículos destruídos pelas enchentes?"
                    video="https://www.youtube.com/embed/IKRg1Vw8KvQ?si=1JXvq2S7Vne9vezn"
                    linkNoticia="https://www.youtube.com/watch?v=IKRg1Vw8KvQ" />

                <CardNoticia titulo="Os moradores que continuam dentro de casas inundadas pelas chuvas no Rio Grande do Sul"
                    video="https://www.youtube.com/embed/ZAxtBkJgp2I?si=_g-7fL3tHF_pzO1-"
                    linkNoticia="https://youtu.be/ZAxtBkJgp2I" />

                <CardNoticia titulo="Argentina sofre com chuvas que atingiram o Rio Grande do Sul"
                    video="https://www.youtube.com/embed/HUAcgfWiyQQ?si=3P15D1nN0JJJKGv9"
                    linkNoticia="https://www.youtube.com/watch?v=HUAcgfWiyQQ" />

            </div>

            <Link to='/Noticias' className='BtnMostrarMais'>Ver mais</Link>
        </aside>
    )
}

export default UltimasNoticias