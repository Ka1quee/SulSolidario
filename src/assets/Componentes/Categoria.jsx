
import {Outlet} from "react-router-dom"
import styles from './Categorias.module.css'
import BannerNoticia from './BannerNoticia';


function Categorias() {
    return (
        <div>
            <BannerNoticia
            categoria="UNIDOS POR UM PROPÓSITO"
            subtitulo="Doe Hoje, Faça a Diferença"/>
            
            <Outlet/>

        </div>
    )
}

export default Categorias;