
import { Link } from 'react-router-dom'
import CardOng from './CardOng';
import styles from './OngAnimais.module.css'
import medicosmundo from '../imagens/ongs/medicosmundo.png'
import fronteiras from '../imagens/ongs/fronteiras.png'
import sobebe from '../imagens/ongs/sobebe.jpg'
import cruz from '../imagens/ongs/cruz.png'
import sangue from '../imagens/ongs/sangue.png'
import cancer from '../imagens/ongs/cancer.png'
import iacp from '../imagens/ongs/iacp.png'
import unidos from '../imagens/ongs/unidos.png'





function OngAnimais() {
    return (
        <main className={styles.conteudo}>

            <div className={styles.container_nav}>
                <nav className={styles.nav_link}>
                    <ul>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/ongsGerais'>ONGs Gerais</Link>
                        </li>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/animais'>Animais</Link>
                        </li>

                        <li className={styles.nav_item} id={styles.atual}>
                            <Link to='/Categoria/hospitalar'>Hospitalar</Link>
                        </li>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/vestimentas'>Vestimentas</Link>
                        </li>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/alimentos'>Alimentos</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={styles.container_cards}>

                <CardOng
                    ongImg={cruz}
                    titulo="Cruz Vermelha"
                    endereco="Av. Moreira Guimarães, 699 – Indianópolis, São Paulo – SP, 04074-031"
                    descricao="A Cruz Vermelha São Paulo foi fundada em 1912, ela integra a maior instituição de ajuda humanitária do mundo, presente em 192 países atuando há mais de 150 anos para minimizar o sofrimento e levar suporte à população mais vulnerável, principalmente em momentos difíceis como guerras, desastres naturais e crises humanitárias e de saúde."
                    link="https://cruzvermelhasaopaulo.org.br/"
                    instagram="https://www.instagram.com/cruzvermelhasaopaulo/" />
                <CardOng
                    ongImg={medicosmundo}
                    titulo="Médicos do mundo"
                    descricao="Ainda que com uma estrutura simples com materiais, medicamentos e equipamentos doados e guardados em sua maioria nas casas de membros da organização a Médicos do Mundo conta com um grupo de voluntários de todas as áreas da medicina humana, e animal além de outros serviços como cuidados com higiene, em parceria com outras ONGs, serviços de atendimento legal, alimentação, pedagógicos e ainda estamos crescendo!"
                    link="https://www.medicosdomundo.org.br/doe-agora/"
                    instagram="https://www.instagram.com/medicosdomundo.brasil/" />




                <CardOng
                    ongImg={cancer}
                    titulo="INSTITUTO DO CÂNCER INFANTIL"
                    descricao="O Instituto do Câncer Infantil (ICI) foi fundado há 30 anos pelo Dr. Algemir Lunardi Brunetto, com o objetivo de melhorar o tratamento de câncer infantil no Brasil. Com o apoio do jornalista Lauro Quadros e outros parceiros, iniciaram o projeto de um centro de referência para crianças e adolescentes com câncer."
                    link="https://ici.ong/como-ajudar/?_gl=1*8zvbo4*_ga*MTU2OTY0NjE0NS4xNzE1NjM0MTk1*_ga_VMKPHT4SMY*MTcxNTYzNDE5NS4xLjAuMTcxNTYzNDE5NS4wLjAuMA"
                    instagram="https://ici.ong/como-ajudar/?_gl=1*8zvbo4*_ga*MTU2OTY0NjE0NS4xNzE1NjM0MTk1*_ga_VMKPHT4SMY*MTcxNTYzNDE5NS4xLjAuMTcxNTYzNDE5NS4wLjAuMA" />

                <CardOng
                    ongImg={iacp}
                    titulo="IAPC Caxias"
                    descricao="FOI FUNDADA EM CAXIAS DO SUL, EM FEVEREIRO 2015.
                    DESDE ESTA DATA IDENTIFICAMOS E AUXILIAMOS FAMÍLIAS VITIMADAS PELO CÂNCER NA REGIÃO E EM TODA SERRA GAÚCHA.
                    NOSSO AUXÍLIO VEM POR MEIO DE DOAÇÕES
                    VINDAS DA COMUNIDADE E PARCERIAS COM
                    EMPRESAS QUE DEMONSTRAM INTERESSE NAS
                    CAUSAS SOCIAIS."
                    link="https://www.instagram.com/p/CrwjNyMro7u/?img_index=4"
                    instagram="https://www.instagram.com/iapc.caxias/" />

                <CardOng
                    ongImg={unidos}
                    titulo="Unidos pela Vida"
                    descricao="Fundado em 2011, o Unidos pela Vida – Instituto Brasileiro de Atenção à Fibrose Cística é uma organização social sem fins lucrativos com sede em Curitiba (PR) e atuação nacional que tem como missão defender que pessoas com fibrose cística no Brasil tenham conhecimento sobre sua saúde e direitos, equidade no acesso ao diagnóstico precoce e aos melhores tratamentos, contribuindo para melhora na qualidade de vida. ."
                    link="https://doe.unidospelavida.org.br/"
                    instagram="https://www.instagram.com/institutounidospelavida/" />

                <CardOng
                    ongImg={sangue}
                    titulo="Doação de sangue"
                    descricao="O Hemocentro do Rio Grande do Sul precisa de doações de sangue de todos os tipos devido ao baixo estoque causado por enchentes e bloqueios de estradas.

                    Hemocentro do Rio Grande do Sul alerta para risco de desabastecimento e solicita agendamento de visitas pela internet."
                    link="https://www.prosangue.sp.gov.br/doacao/agende.html"
                    instagram="https://www.instagram.com/cruzvermelhasaopaulo/" />

                {/* <CardOng
                    ongImg={fronteiras}
                    titulo="Médicos sem fronteiras"
                    descricao="Expressamos os nossos votos de boa sorte e solicitamos forças para todos os envolvidos nos esforços de auxílio, especialmente para o povo gaúcho. Que essa mensagem transmita nosso apoio e encorajamento neste momento desafiador."
                    link=" https://doe.msf.org.br/doacao-unica-pessoal?utm_source=Redirect&utm_medium=SiteConteudo&utm_campaign=botaodoeagora&utm_content=7014Q0000029O3VQAU "
                    instagram=" https://www.instagram.com/msf_brasil/" /> */}


                {/* <CardOng
                    ongImg={sobebe}

                    titulo="Só Bebê"
                    descricao="A Associação Casa de Acolhida Só Bebê, fundada em 27 de junho de 2009 na cidade de Porto Alegre, é uma ONG sem fins lucrativos que nasceu da necessidade de ter um espaço de acolhimento para a primeira infância."
                    link="https://www.sobebe.ong.br/#o-que-fazemos" /> */}

            </div>


        </main>
    )
}

export default OngAnimais;