import CardNoticia from './CardNoticia'
import NoticiaDestaque from './NoticiaDestaque'
import styles from './Noticia.module.css'
import BannerNoticia from './BannerNoticia'
import CardFake from './CardFakeNews'
import style from './BannerNoticia.module.css'
import bbc from '../imagens/emissoras/bbc_news_14062.png'
import record from '../imagens/emissoras/record.png'
import g1 from '../imagens/emissoras/g1.png'
import uol from '../imagens/emissoras/uol.png'
import band from '../imagens/emissoras/band.png'
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
                    <CardNoticia titulo="Pelotas (RS) decreta estado de calamidade pública | CNN PRIME TIME"
                        video="https://www.youtube.com/embed/M3hfuUNt9hw?"
                        linkNoticia="https://youtu.be/M3hfuUNt9hw" />

                    <CardNoticia titulo="Nível do Guaíba volta a subir em Porto Alegre (RS) e deve superar recorde histórico"
                        video="https://www.youtube.com/embed/Z24ANjgMnZs?"
                        linkNoticia="https://www.youtube.com/embed/Z24ANjgMnZs" />

                    <CardNoticia titulo="Tremores de terra são sentidos por moradores de Caxias do Sul (RS)"
                        video="https://www.youtube.com/embed/ULWHRyUM1V0?si=2FVS2219LpGM6FHp"
                        linkNoticia="https://www.youtube.com/watch?v=ULWHRyUM1V0" />

                    <CardNoticia titulo="Biden diz que EUA estão em contato com o Brasil por enchentes no Rio Grande do Sul; Padilha analisa"
                        video="https://www.youtube.com/embed/7SKE5dKLEHM?si=DzMfZ-Tn4ZCQbVfn"
                        linkNoticia="https://www.youtube.com/watch?v=7SKE5dKLEHM" />
                    {/* Pamy */}

                    <CardNoticia titulo="Frio intenso no Rio Grande do Sul pode provocar geada | CNN PRIME TIME"
                        video="https://www.youtube.com/embed/3FJXm284QXY?si=YUX6y9SfINHSq6M_"
                        linkNoticia="https://www.youtube.com/watch?v=3FJXm284QXY" />

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



            {/* <div className={styles.container_fake}>
                    <div className={styles.container_titulo}>
                        <h1 className={styles.titulo}>Evite cair em <span className={styles.fake_title}>Fake News</span> </h1>
                        <h2 className={styles.subtitulo}>Confira as principais notícias falsas sobre a catástrofe</h2>
                    </div> 

                    
                    <CardFake
                        titulo="As doações estão sendo retidas para esperar a visita do Presidente ao Rio grande do Sul?"
                        descricao="Vídeo que voltou a circular em maio de 202 já havia sido verificado em 2023, quando também foi classificado como falso. "
                        linkNoticiaReal="https://g1.globo.com/fato-ou-fake/noticia/2024/05/07/e-fake-video-em-que-mulher-diz-que-doacoes-foram-retidas-em-lajeado-para-esperar-visita-de-lula.ghtml" />

                    
                    <CardFake
                        titulo="Foram mais de 300 mortes confirmadas?"
                        descricao="Prefeitura de Canoas esclarece que a mensagem é falsa. Até as 17h51 de terça-feira (7), havia no município registro de dois óbitos e 25 desaparecidos —no estado, foram 95 mortes, segundo a Defesa Civil do RS."
                        linkNoticiaReal="https://g1.globo.com/fato-ou-fake/noticia/2024/05/07/e-fake-video-que-fala-em-mais-de-300-corpos-encontrados-em-canoas-no-rio-grande-do-sul.ghtml" />

                  
                    <CardFake
                        titulo="Rio Grande do Sul está impedindo chegada de doações por falta de nota fiscal?"
                        descricao="Circula nas redes sociais um vídeo segundo o qual a Secretaria da Fazenda do Rio Grande do Sul está impedindo a entrada de caminhões com doações para os desabrigados pelos temporais que atingiram o estado por falta de nota fiscal ou para cobrança de impostos."
                        linkNoticiaReal="https://g1.globo.com/fato-ou-fake/noticia/2024/05/07/e-fake-que-rio-grande-do-sul-esta-impedindo-chegada-de-doacoes-por-falta-de-nota-fiscal.ghtml" />
                  

                    <CardFake
                        titulo="Governo do RS desmente boatos sobre cobranças de impostos em doações?"
                        descricao="Um vídeo divulgado pelo estado explica que informações falsas sobre impostos nas doações têm sido compartilhadas nas redes."
                        linkNoticiaReal="https://noticias.uol.com.br/cotidiano/ultimas-noticias/2024/05/06/esclarecimento-noticias-falsas-impostos-doacoes-rs.htm" />

                </div>  */}



        </main>
    )
}

export default Noticia