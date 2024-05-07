import CardNoticia from './CardNoticia'
import NoticiaDestaque from './NoticiaDestaque'

import styles from './Noticia.module.css'

function Noticia(){
    return(
        <main className={styles.conteudo}>
        <h1 className={styles.titulo}>Ultimas notícias sobre o <span className={styles.destaque}>Rio Grande do Sul</span> </h1>
        <h2 className={styles.subtitulo}>Acompanhe as notícias em tempo real</h2>
        <div className={styles.container_noticias}>
            <NoticiaDestaque/>
            <CardNoticia titulo="Noticia sobre Rio Grande do Sul
                Noticia sobre Rio Grande do Sul"/>

        </div>
        </main>
    )
}

export default Noticia