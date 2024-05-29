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

<CardNoticia titulo="Confira as últimas informações do Rio Grande do Sul | Band em Alta"
                        video="https://www.youtube.com/embed/IFTEcJJMW1E?si=nMYwnR_mx1htFugs"
                        linkNoticia="https://www.youtube.com/watch?v=IFTEcJJMW1E" />

                    <CardNoticia titulo="Volume alto de chuva pode voltar no Rio Grande do Sul"
                        video="https://www.youtube.com/embed/zjjTMGHJGLU?si=CTYQIJYSst2u0KXc"
                        linkNoticia="https://www.youtube.com/watch?v=zjjTMGHJGLU" />

                    <CardNoticia titulo="Crise no RS: Canoas tem previsão de novas chuvas | Jornal da Band"
                        video="https://www.youtube.com/embed/xY1hXNsx0mU?si=ZILSQPsH4MdJFSxT"
                        linkNoticia="https://www.youtube.com/watch?v=xY1hXNsx0mU" />

                    <CardNoticia titulo="Município de Santa Catarina vai decretar situação de emergência"
                        video="https://www.youtube.com/embed/-_iMw7ti0a8?si=0QsZFsGNYvdw8f3H"
                        linkNoticia="https://www.youtube.com/watch?v=-_iMw7ti0a8" />

            </div>

            <Link to='/Noticias' className='BtnMostrarMais'>Ver mais</Link>
        </aside>
    )
}

export default UltimasNoticias