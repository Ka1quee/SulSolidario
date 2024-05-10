
import {Outlet} from "react-router-dom"
import styles from './Categorias.module.css'
import BannerNoticia from './BannerNoticia';
import style from './BannerNoticia.module.css'

function Categorias() {

    
    return (
        <div>
            {/* <BannerNoticia
            categoria="UNIDOS POR UM PROPÓSITO"
            subtitulo="Doe Hoje, Faça a Diferença"/> */}

<div className={style.banner3}>
            <h2 className={style.titulo_banner}>UNIDOS POR UM PROPÓSITO</h2>
            <p className={style.subtitulo_banner}>Doe Hoje, Faça a Diferença</p>
        </div>
            
            
            <Outlet/>
            
        </div>
    )
}

export default Categorias;