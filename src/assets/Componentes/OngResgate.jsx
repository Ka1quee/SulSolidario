
import { Link } from 'react-router-dom'
import CardOng from './CardOng';
import styles from './OngAnimais.module.css'
import medicosmundo from '../imagens/ongs/medicosmundo.png'
import fronteiras from '../imagens/ongs/fronteiras.png'
import sobebe from '../imagens/ongs/sobebe.jpg'


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

                        <li className={styles.nav_item} id={styles.atual}>
                            <Link to='/Categoria/resgate'>Hospitalar</Link>
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
                    ongImg={medicosmundo}
                    titulo="Médicos do mundo"
                    descricao="Ainda que com uma estrutura simples com materiais, medicamentos e equipamentos doados e guardados em sua maioria nas casas de membros da organização a Médicos do Mundo conta com um grupo de voluntários de todas as áreas da medicina humana, e animal além de outros serviços como cuidados com higiene, em parceria com outras ONGs, serviços de atendimento legal, alimentação, pedagógicos e ainda estamos crescendo!"
                    link="https://www.medicosdomundo.org.br/doe-agora/"
                    instagram="https://www.instagram.com/medicosdomundo.brasil/" />

                <CardOng
                    ongImg={fronteiras}
                    titulo="Médicos sem fronteiras"
                    descricao="Expressamos os nossos votos de boa sorte e solicitamos forças para todos os envolvidos nos esforços de auxílio, especialmente para o povo gaúcho. Que essa mensagem transmita nosso apoio e encorajamento neste momento desafiador."
                    link=" https://doe.msf.org.br/doacao-unica-pessoal?utm_source=Redirect&utm_medium=SiteConteudo&utm_campaign=botaodoeagora&utm_content=7014Q0000029O3VQAU "
                    instagram=" https://www.instagram.com/msf_brasil/" />


                <CardOng
                    ongImg={sobebe}

                    titulo="Só Bebê"
                    descricao="A Associação Casa de Acolhida Só Bebê, fundada em 27 de junho de 2009 na cidade de Porto Alegre, é uma ONG sem fins lucrativos que nasceu da necessidade de ter um espaço de acolhimento para a primeira infância."
                    link="https://www.sobebe.ong.br/#o-que-fazemos" />

            </div>


        </main>
    )
}

export default OngAnimais;