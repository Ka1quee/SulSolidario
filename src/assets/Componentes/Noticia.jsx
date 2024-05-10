import CardNoticia from './CardNoticia'
import NoticiaDestaque from './NoticiaDestaque'
import styles from './Noticia.module.css'
import BannerNoticia from './BannerNoticia'
import CardFake from './CardFakeNews'
import style from './BannerNoticia.module.css'


function Noticia() {
    return (
        <main className={styles.conteudo}>
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

                    <CardNoticia titulo="Inundações no Rio Grande do Sul: a cronologia da maior tragédia ambiental do Estado"
                        video="https://www.youtube.com/embed/JIosqudY9aM?si=V-H6os2igsEN0oBB"
                        linkNoticia="https://www.youtube.com/watch?v=JIosqudY9aM" />

                    <CardNoticia titulo="Policiais reforçam equipes de salvamento para evitar assaltos no Rio Grande do Sul | Jornal da Band"
                        video="https://www.youtube.com/embed/UxnyJR9mYyc?si=zwG_mfqsP9Ijn8x7"
                        linkNoticia="https://www.youtube.com/watch?v=UxnyJR9mYyc" />

                    <CardNoticia titulo="Enchente no Rio Grande do Sul: Água baixa em Lajeado e moradora grava ‘dia de recomeços’; veja vídeo"
                        video="https://www.youtube.com/embed/E1EG0gD-Ekc?si=qvz1FxxKIbDuYVUG"
                        linkNoticia="https://www.youtube.com/watch?v=E1EG0gD-Ekc" />

                    <CardNoticia titulo="Rio Grande do Sul: enchentes deixam 107 mortos e mais de 230 mil desabrigados"
                        video="https://www.youtube.com/embed/EFNhjwbaBaw?si=r2DpzhLKkW2_Zv0o"
                        linkNoticia="https://www.youtube.com/watch?v=EFNhjwbaBaw" />

                    <CardNoticia titulo="Inundações no Rio Grande do Sul: o antes e depois da destruição pelas chuvas"
                        video="https://www.youtube.com/embed/MXhighMI44s?si=xjQ69irwzHx6f3Uc"
                        linkNoticia="https://www.youtube.com/watch?v=MXhighMI44s" />

                    <CardNoticia titulo="ENCHENTE no Rio Grande do Sul – de onde veio tanta água? As causas e as consequências."
                        video="https://www.youtube.com/embed/EZbr2uZEX6g?si=rHqB7FkdOfLWKkqz"
                        linkNoticia="https://www.youtube.com/watch?v=EZbr2uZEX6g" />

                    <CardNoticia titulo="Resgate Caramelo no RS: 11 pessoas e 5 botes são mobilizados para salvar égua de telhado"
                        video="https://www.youtube.com/embed/ZYs04yRLXH4?si=7LtDqaNiWo0FJfa5"
                        linkNoticia="https://www.youtube.com/watch?v=ZYs04yRLXH4" />

                    <CardNoticia titulo="Rio Grande do Sul precisará de R$ 19 bilhões para ser reconstruído, diz Eduardo Leite | O POVO NEWS"
                        video="https://www.youtube.com/embed/klcTAAVexN8?si=4n6w1zBtqp4qtISh"
                        linkNoticia="https://www.youtube.com/watch?v=klcTAAVexN8" />

                    <CardNoticia titulo="Ao menos 47 pessoas foram presas em meio à calamidade no RS | Primeiro Impacto (10/05/24)"
                        video="https://www.youtube.com/embed/7HoYf6AWnDk?si=dnmHMLFxxigYME_H"
                        linkNoticia="https://www.youtube.com/watch?v=7HoYf6AWnDk" />

                    <CardNoticia titulo="Brasilienses se unem para ajudar o Rio Grande do Sul | Tá na hora DF"
                        video="https://www.youtube.com/embed/YFYRPOm8Yqg?si=0RVzOIHVrUhO6lCU"
                        linkNoticia="https://www.youtube.com/watch?v=YFYRPOm8Yqg" />




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