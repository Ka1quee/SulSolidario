
import style from './BannerNoticia.module.css'

function BannerNoticia (){

    return(
        <div className={style.Banner}>
            <h2 className={style.titulo_banner}>NOTÍCIAS</h2>
            <p className={style.subtitulo_banner}>Juntos, Superaremos as Enchentes</p>
        </div>
    )
}

export default BannerNoticia