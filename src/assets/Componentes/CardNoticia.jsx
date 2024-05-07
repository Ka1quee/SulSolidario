import styles from './CardNoticia.module.css'

function CardNoticia({titulo, video, linkNoticia}){
    return(
        <div className={styles.card_noticia}>
            <div className={styles.container_video}>
            <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className={styles.noticia_info}>
                <h4 className={styles.titulo_noticia}>{titulo}</h4>
                <button className={styles.btn}>Ver mais</button>
            </div>
        </div>
    )
}

export default CardNoticia