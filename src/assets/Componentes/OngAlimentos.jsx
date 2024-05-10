
import { Link } from 'react-router-dom'
import CardOng from './CardOng';
import styles from './OngAnimais.module.css'
import uniao from '../imagens/ongs/uniao.webp'
import falcoes from '../imagens/ongs/ong_falcoes.png'
import alimentos from '../imagens/ongs/alimentos.png'
import cufa from '../imagens/ongs/cufa.png'
import infraero from '../imagens/ongs/infraero2.png'
import voluntarios from '../imagens/ongs/voluntarios.png'
import vidabreve from '../imagens/ongs/vidabreve.webp'
import caxias from '../imagens/ongs/voluntarioscaxias.webp'
import moradia from '../imagens/ongs/moradiaCidadania.png'
import escolaVida from '../imagens/ongs/escolaVida.webp'




function OngAnimais() {
    return (
        <main className={styles.conteudo}>

            <div className={styles.container_nav}>
                <nav className={styles.nav_link}>
                    <ul>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/ongsGerais'>ONGS Gerais</Link>
                        </li>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/animais'>Animais</Link>
                        </li>

                        <li className={styles.nav_item} >
                            <Link to='/Categoria/hospitalar'>Hospitalar</Link>
                        </li>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/vestimentas'>Vestimentas</Link>
                        </li>

                        <li className={styles.nav_item} id={styles.atual}>
                            <Link to='/Categoria/alimentos'>Alimentos</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={styles.container_cards}> 
                <CardOng
                    ongImg={uniao}
                    titulo="UNIÃO/BR"
                    descricao="O União BR é um movimento apartidário que é intermediário entre pessoas dispostas a ajudar e aquelas que necessitam de ajuda. Fundado em 2020 para combater os efeitos da pandemia, já beneficiou mais de 26 milhões de pessoas e 4 mil ONGs, fornecendo equipamentos médicos, alimentos e apoio para emergências nacionais e internacionais, incluindo o auxílio aos biomas do Pantanal e da Amazônia, bem como assistência para refugiados na Ucrânia."
                    link="https://www.instagram.com/p/C6fFFlSNhZw/"
                    instagram="https://www.instagram.com/" />


                <CardOng
                    ongImg={falcoes}
                    titulo="GERANDO FALCÕES"
                    descricao="A Rede Gerando Falcões é um ecossistema de desenvolvimento social originado na favela, que acredita na transformação das comunidades por meio de uma combinação de educação socioemocional, educação profissional, acesso ao trabalho e tecnologia. A organização busca criar uma tecnologia social em larga escala para erradicar a pobreza nas favelas, mantendo sua essência de pluralidade."
                    link="https://gerandofalcoes.com/" /> 

                <CardOng
                    ongImg={alimentos}
                    titulo="REDE DE BANCOS DE ALIMENTOS DO RIO GRANDE DO SUL"
                    descricao="A Rede de Bancos de Alimentos do Rio Grande do Sul foi criada em 2007, com o objetivo de ampliar as atividades do Banco de Alimentos de Porto Alegre, o primeiro Banco de Alimentos criado no Brasil. Levando alimento, saúde e segurança alimentar para as comunidades carentes."
                    link="https://www.redebancodealimentos.org.br/Inicial" />

                <CardOng
                    ongImg={cufa}
                    titulo="CUFA - CENTRAL ÚNICA DAS FAVELAS"
                    descricao="A Central Única das Favelas (CUFA) é uma organização presente nas favelas brasileiras há mais de 20 anos, promovendo atividades culturais, esportivas e educacionais. Fundada por Celso Athayde, recebeu prêmios de impacto social e inovação"
                    link="https://cufa.org.br/maes-da-favela/" />

                {/* <CardOng
                    ongImg={infraero}
                    titulo="INFRAERO AEROPORTOS"
                    descricao="A Infraero está ampliando a campanha de arrecadação de donativos para ajudar as vítimas das enchentes no Rio Grande do Sul. Os 16 terminais administrados pela empresa e sua sede, em Brasília, vão receber água, alimentos não perecíveis e itens de higiene pessoal. Os pontos de coleta estão distribuídos em aeroportos de várias regiões do país, e todos os donativos serão transportados por via aérea para o Rio Grande do Sul. "
                    link="https://cufa.org.br/maes-da-favela/" /> */}

                <CardOng
                    ongImg={voluntarios}

                    titulo="Parceiros Voluntários"
                    descricao="A Parceiros Voluntários é uma organização não governamental (ONG) sediada no Rio Grande do Sul, Brasil, fundada em 1995. Seu principal objetivo é promover o voluntariado e a participação cidadã na comunidade, incentivando a colaboração e o engajamento social. "
                    link="https://parceirosvoluntarios.org.br/" />

                {/* <CardOng
                    ongImg={escolaVida}
                    titulo="Escola da Vida"
                    descricao="A ONG Movimento Instituição da Vida é uma Organização Civil, não governamental e sem fins lucrativos. Desenvolve suas atividades desde o ano de 2001 e está legalmente constituída desde 04 de Junho de 2003 e tem como seu objetivo desenvolver a consciência de que o apoio aos menos favorecidos é fator primordial para uma sociedade mais justa e fraterna, tão necessária para um mundo melhor."
                    link="https://escoladavidapoa.wixsite.com/escoladavida" /> */}

                <CardOng
                    ongImg={vidabreve}
                    titulo="VIDA BREVE"
                    descricao="Há 17 anos, temos a honra de impactar positivamente vidas por meio da arte, cultura e educação, dedicando-nos incansavelmente a construir uma sociedade mais humana, igualitária e justa. Acreditamos no poder transformador desses elementos, inspirando mudanças e proporcionando oportunidades que transcendem gerações."
                    link="https://www.vidabreve.org/como-ajudar/" />

                <CardOng
                    ongImg={caxias}

                    titulo="Parceiros Voluntários - Caxias do Sul"
                    descricao="Há 17 anos, temos a honra de impactar positivamente vidas por meio da arte, cultura e educação, dedicando-nos incansavelmente a construir uma sociedade mais humana, igualitária e justa. Acreditamos no poder transformador desses elementos, inspirando mudanças e proporcionando oportunidades que transcendem gerações."
                    link="https://www.parceiros.org.br/" />

                <CardOng
                    ongImg={moradia}
                    titulo="ONG Moradia e Cidadania"
                    descricao="A ONG Moradia e Cidadania, fundada por funcionários da CAIXA em 2000, busca promover um país mais justo, pacífico, inclusivo e sustentável. Reconhecida como Utilidade Pública Federal e OSCIP em 2001, sua missão é combater a fome e a miséria, promover a educação, geração de renda e proteção ambiental."
                    link="https://moradiaecidadania.org.br/" />
            </div>


        </main>
    )
}

export default OngAnimais;