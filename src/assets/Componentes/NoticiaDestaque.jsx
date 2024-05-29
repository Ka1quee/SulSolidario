import styles from './NoticiaDestaque.module.css'
import imgNoticia from "../imagens/imagenNoticiaPrincipal.webp"



function CardNoticia({ linkNoticia }) {
    return (
        <div className={styles.noticia_destaque}>

            <div className={styles.container_video}>
                <a href="https://g1.globo.com/rs/rio-grande-do-sul/" target='_blank'>
                    <img className={styles.img} src="https://www.rbsdirect.com.br/filestore/7/4/9/6/5/9/4_ff1ff3cdb019a5f/4956947_9684b329ca24101.jpg?w=700" alt="" />
                </a>
            </div>

            <div className={styles.noticia_info}>
                <div className={styles.info_noticia}>
                    <a href="https://g1.globo.com/rs/rio-grande-do-sul/" className={styles.link}>
                    <h4 className={styles.titulo_noticia}>G1 - Fique por dentro das notícias mais recentes sobre Rio Grande do Sul</h4>
                    </a>
                    <p className={styles.subtitulo}></p>
                </div>
                <a href={linkNoticia} target='_blank'> <button className={styles.btn}>Ver mais</button></a>
            </div>
        </div>
    )
}

export default CardNoticia