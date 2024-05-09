import CardNoticia from './CardNoticia'
import NoticiaDestaque from './NoticiaDestaque'
import styles from './Noticia.module.css'
import BannerNoticia from './BannerNoticia'
import CardFake from './CardFakeNews'


function Noticia() {
    return (
        <main className={styles.conteudo}>
            <BannerNoticia
                categoria="NOTÍCIAS"
                subtitulo="Juntos, Superaremos as Enchentes" />
            <div className={styles.container_conteudo}> 

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
                
                <CardNoticia titulo="Noticia sobre Rio Grande do Sul
                Noticia sobre Rio Grande do Sul"
                        video="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC"
                        linkNoticia="https://www.youtube.com/embed/YfCAIAVePBo?si=MXr-ag-ilAKwShFC" />
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