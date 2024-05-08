
import style from './BannerNoticia.module.css'

function BannerNoticia ({categoria, subtitulo}){

    return(
        <div className={style.Banner}>
            <h2 className={style.titulo_banner}>{categoria}</h2>
            <p className={style.subtitulo_banner}>{subtitulo}</p>
        </div>
    )
}

export default BannerNoticia