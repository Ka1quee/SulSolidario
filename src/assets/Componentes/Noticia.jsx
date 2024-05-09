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
 
                    <CardNoticia titulo="Lula fala ao vivo sobre situação do Rio Grande do Sul, planos do governo e mais; assista"
                        video="https://www.youtube.com/embed/3SWVRrLOaSs?si=PqMU4BIFbhxG_4bN"
                        linkNoticia="https://www.youtube.com/watch?v=3SWVRrLOaSs" />

                    <CardNoticia titulo="Últimas informações sobre a enchente no Rio Grande do Sul | Rádio Gaúcha | 09/05/2024"
                        video="https://www.youtube.com/embed/idnNAssVetk?si=j64_1B4fgKcBacRu"
                        linkNoticia="https://www.youtube.com/watch?v=idnNAssVetk" />

                    <CardNoticia titulo="AO VIVO: Acompanhe as principais notícias do dia na Record News"
                        video="https://www.youtube.com/embed/mgJTRKTYReA?si=blS7JM-UNYkll22w"
                        linkNoticia="https://www.youtube.com/watch?v=mgJTRKTYReA" />

                    <CardNoticia titulo="Saiba as últimas notícias sobre a tragédia no Rio Grande do Sul #riograndedosul"
                        video="https://www.youtube.com/embed/YfCAIAVePBo?si=FDOhBB6hXrsxIZQp"
                        linkNoticia="https://www.youtube.com/watch?v=YfCAIAVePBo" />

                    <CardNoticia titulo="Inundações no Rio Grande do Sul: o antes e depois da destruição pelas chuvas"
                        video="https://www.youtube.com/embed/MXhighMI44s?si=xjQ69irwzHx6f3Uc"
                        linkNoticia="https://www.youtube.com/watch?v=MXhighMI44s" />

                    <CardNoticia titulo="ENCHENTE no Rio Grande do Sul – de onde veio tanta água? As causas e as consequências."
                        video="https://www.youtube.com/embed/EZbr2uZEX6g?si=rHqB7FkdOfLWKkqz"
                        linkNoticia="https://www.youtube.com/watch?v=EZbr2uZEX6g" />
                
                <CardNoticia titulo="AO VIVO: LIVE CNN - 09/05/2024"
                        video="https://www.youtube.com/embed/YkvE53XMDGc?si=v_LTCBFIgvjrAfzd"
                        linkNoticia="https://www.youtube.com/watch?v=YkvE53XMDGc" />
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