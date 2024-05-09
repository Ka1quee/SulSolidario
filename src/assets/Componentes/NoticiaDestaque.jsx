import styles from './NoticiaDestaque.module.css'
import imgNoticia from "../imagens/imagenNoticiaPrincipal.webp"



function CardNoticia({linkNoticia}){
    return(
        <div className={styles.noticia_destaque}>
            <div className={styles.container_video}>
            <img className={styles.img} src={imgNoticia} alt="" />
            </div>

            <div className={styles.noticia_info}>
               <div className={styles.info_noticia}>
               <h4  className={styles.titulo_noticia}>Como evitar cair em golpes do Pix para o Rio Grande do Sul</h4>
               <p className={styles.subtitulo}>As enchentes no Rio Grande do Sul após fortes</p>
               </div>
            <a href={linkNoticia} target='_blank'> <button className={styles.btn}>Ver mais</button></a>
            </div>
        </div>
    )
}

export default CardNoticia