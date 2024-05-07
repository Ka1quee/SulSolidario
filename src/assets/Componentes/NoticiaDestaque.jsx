import styles from './NoticiaDestaque.module.css'



function CardNoticia({linkNoticia}){
    return(
        <div className={styles.noticia_destaque}>
            <div className={styles.container_video}>
            <img className={styles.img} src="https://s2.glbimg.com/QeycExhjj1w-BU00K47aO0Ko0SI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/3/n/tVkCMuRMuBdvb3Xn6Yww/whatsapp-image-2020-07-10-at-15.51.07-1-.jpeg" alt="" />
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