import CardNoticia from './CardNoticia'
import NoticiaDestaque from './NoticiaDestaque'
import styles from './Noticia.module.css'
import BannerNoticia from './BannerNoticia'


function Noticia() {
    return (
        <main className={styles.conteudo}>
            <BannerNoticia 
            categoria = "NOTÍCIAS"/>
            <div className={styles.container_titulo}>
            <h1 className={styles.titulo}>Ultimas notícias sobre o <span className={styles.destaque}>Rio Grande do Sul</span> </h1>
            <h2 className={styles.subtitulo}>Acompanhe as notícias em tempo real</h2>
            </div>

            <div className={styles.container_noticias}>
                <NoticiaDestaque
                    linkNoticia="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC" />

                <CardNoticia titulo="Noticia sobre Rio Grande do Sul
                Noticia sobre Rio Grande do Sul"
                    video="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC"
                    linkNoticia="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC" />

<CardNoticia titulo="Noticia sobre Rio Grande do Sul
                Noticia sobre Rio Grande do Sul"
                    video="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC"
                    linkNoticia="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC" />

<CardNoticia titulo="Noticia sobre Rio Grande do Sul
                Noticia sobre Rio Grande do Sul"
                    video="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC"
                    linkNoticia="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC" />

<CardNoticia titulo="Noticia sobre Rio Grande do Sul
                Noticia sobre Rio Grande do Sul"
                    video="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC"
                    linkNoticia="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC" />

<CardNoticia titulo="Noticia sobre Rio Grande do Sul
                Noticia sobre Rio Grande do Sul"
                    video="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC"
                    linkNoticia="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC" />

<CardNoticia titulo="Noticia sobre Rio Grande do Sul
                Noticia sobre Rio Grande do Sul"
                    video="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC"
                    linkNoticia="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC" />
            </div>

            
        </main>
    )
}

export default Noticia