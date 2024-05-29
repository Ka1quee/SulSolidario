import CardNoticia from './CardNoticia'
import NoticiaDestaque from './NoticiaDestaque'
import styles from './Noticia.module.css'
import style from './BannerNoticia.module.css'
import bbc from '../imagens/emissoras/bbc_news_14062.png'
import record from '../imagens/emissoras/record.png'
import g1 from '../imagens/emissoras/g1.png'
import uol from '../imagens/emissoras/uol.png'
import cnn from '../imagens/emissoras/cnn.png'
import close from '../imagens/emissoras/Close.png'
import React, { useState } from 'react';

function Noticia() {
    const [estiloDoElemento, setEstiloDoElemento] = useState({ display: 'flex' });
    const mudarEstilo = () => {
        setEstiloDoElemento({ display: 'none' });

    };
    return (
        <main className={styles.conteudo}>
            <div style={estiloDoElemento} className={styles.modal}>

                <div className={styles.modal_content}>
                    <img onClick={mudarEstilo} src={close} alt="" className={styles.close} />
                    <div className={styles.modal_title}>
                        <h2>Fazemos combate contra <span className={styles.fake_title}>Fake News</span></h2>
                        <p>Utilizamos apenas canais de confiança</p>
                    </div>
                    <div className={styles.emissoras}>
                        <div className={styles.logo_emissora}>
                            <a href="https://www.recordtvrs.com.br/noticias" target='_blank'> <img src={record} alt="" className={styles.img_emissora} /></a>
                        </div>

                        <div className={styles.logo_emissora}>
                            <a href="https://g1.globo.com/rs/rio-grande-do-sul/ultimas-noticias/" target='_blank'> <img src={g1} alt="" className={styles.img_emissora} /></a>
                        </div>
                        <div className={styles.logo_emissora}>
                            <a href="https://noticias.uol.com.br/rio-grande-do-sul/noticias/" target='_blank'> <img src={uol} alt="" className={styles.img_emissora} /></a>
                        </div>
                        <div className={styles.logo_emissora}>
                            <a href="https://www.cnnbrasil.com.br/tudo-sobre/rio-grande-do-sul/" target='_blank'> <img src={cnn} alt="" className={styles.img_emissora} /></a>
                        </div>
                        <div className={styles.logo_emissora}>
                            <a href="https://www.bbc.com/portuguese/topics/c06gq6k654jt" target='_blank'><img src={bbc} alt="" className={styles.img_emissora} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className={style.banner2}>
                <h2 className={style.titulo_banner}>NOTÍCIAS</h2>
                <p className={style.subtitulo_banner}>Juntos, Superaremos as Enchentes</p>
            </div>
            <div className={styles.container_conteudo}>

                <div className={styles.container_titulo}>
                    <h1 className={styles.titulo}>Ultimas notícias sobre o <span className={styles.destaque}>Rio Grande do Sul</span> </h1>
                    <h2 className={styles.subtitulo}>Acompanhe as notícias em tempo real</h2>
                </div>

                <div className={styles.container_noticias}>
                    <NoticiaDestaque
                        linkNoticia="https://g1.globo.com/rs/rio-grande-do-sul/" />

                    {/* Pamy */}
                    <CardNoticia titulo="Confira as últimas informações do Rio Grande do Sul | Band em Alta"
                        video="https://www.youtube.com/embed/IFTEcJJMW1E?si=nMYwnR_mx1htFugs"
                        linkNoticia="https://www.youtube.com/watch?v=IFTEcJJMW1E" />

                    <CardNoticia titulo="Volume alto de chuva pode voltar no Rio Grande do Sul"
                        video="https://www.youtube.com/embed/zjjTMGHJGLU?si=CTYQIJYSst2u0KXc"
                        linkNoticia="https://www.youtube.com/watch?v=zjjTMGHJGLU" />

                    <CardNoticia titulo="Crise no RS: Canoas tem previsão de novas chuvas | Jornal da Band"
                        video="https://www.youtube.com/embed/xY1hXNsx0mU?si=ZILSQPsH4MdJFSxT"
                        linkNoticia="https://www.youtube.com/watch?v=xY1hXNsx0mU" />

                    <CardNoticia titulo="Município de Santa Catarina vai decretar situação de emergência"
                        video="https://www.youtube.com/embed/-_iMw7ti0a8?si=0QsZFsGNYvdw8f3H"
                        linkNoticia="https://www.youtube.com/watch?v=-_iMw7ti0a8" />
                    {/* Pamy */}

                    <CardNoticia titulo="Água do mar invade ruas do Rio: Ressaca no litoral do RS atinge Maricá e enche ruas; veja vídeos"
                        video="https://www.youtube.com/embed/amxtsfH6S38?si=gPympS5L9Sdst524"
                        linkNoticia="https://www.youtube.com/watch?v=amxtsfH6S38" />

                    <CardNoticia titulo="Secretário atualiza situação das rodovias no Rio Grande do Sul"
                        video="https://www.youtube.com/embed/7TKSGxcMOk8?si=37ETd-G06yl9_pOo"
                        linkNoticia="https://www.youtube.com/watch?v=7TKSGxcMOk8" />

                    <CardNoticia titulo="Chuvas no Rio Grande do Sul: imagens aéreas mostram Porto Alegre alagada no domingo (12)"
                        video="https://www.youtube.com/embed/68REa_mYBRI?si=pIDmQDNZtxrCCb9p"
                        linkNoticia="https://www.youtube.com/watch?v=68REa_mYBRI" />

                    <CardNoticia titulo="Chuvas ainda são registradas na capital do Rio Grande do Sul"
                        video="https://www.youtube.com/embed/xvtP6fqgdF4?si=FVYeSViwLlk-fYOI"
                        linkNoticia="https://www.youtube.com/watch?v=xvtP6fqgdF4" />

                    <CardNoticia titulo="Chuvas no RS: moradores de Caxias do Sul relatam tremor de terra I Bora Brasil"
                        video="https://www.youtube.com/embed/gL0Ei9-qfJ0?si=640SGOlcu3yD2mY0"
                        linkNoticia="https://www.youtube.com/watch?v=gL0Ei9-qfJ0" />

                    <CardNoticia titulo="Tremor em Caxias do Sul (RS): Morador mostra como ficou bairro e conta que 'parte afundou'; vídeos"
                        video="https://www.youtube.com/embed/fbHzYsO2VAM?si=ROrkKan2m0Lr97aG"
                        linkNoticia="https://www.youtube.com/watch?v=fbHzYsO2VAM" />




                </div>


            </div>

        </main>
    )
}

export default Noticia