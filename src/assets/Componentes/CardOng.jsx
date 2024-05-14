import styles from './CardOng.module.css'

function CardOng({ titulo, endereco, descricao, img, link, ongImg }) {
    return (
        <div className={styles.card_ong}>
            <div className={styles.container_card}>

                <div className={styles.img_redes}>
                    <div className={styles.img_ong}>
                        <img src={ongImg} alt="" />
                    </div>

                     {/* <a href="#" className={styles.insta}>
                    <i class="fa-brands fa-instagram"></i>
                    </a> */}
                </div>



                <div className={styles.ong_info}>

                    <div className={styles.titulo_local}>
                        <h3 className={styles.titulo_ong}>{titulo}</h3>
                        <p className={styles.endereco_ong}>{endereco}</p>
                        <div className={styles.desc_ong}>
                        {descricao}
                    </div>
                    </div>


                    <a href={link} target='_blank'>
                        <button className={styles.btn_doar}>Quero doar</button>
                    </a>
                    

                </div>
            </div>


        </div>
    )
}

export default CardOng;