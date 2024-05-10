import { Link } from 'react-router-dom'
import CardOng from './CardOng';
import styles from './OngAnimais.module.css'
import ajuris from '../imagens/ongs/ajuris.png'
import sobradinho from '../imagens/ongs/sobradinho.png'
import federasul from '../imagens/ongs/federasul.png'
import cidadania from '../imagens/ongs/cidadania.png'
import comunitas from '../imagens/ongs/comunitas.png'
import uniao from '../imagens/ongs/uniao.webp'

 



function OngAnimais() {
    return (
        <main className={styles.conteudo}>

            <div className={styles.container_nav}>
                <nav className={styles.nav_link}>
                    <ul>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/ongsGerais' id={styles.atual}>ONGS Gerais</Link>
                        </li>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/animais'>Animais</Link>
                        </li>

                        <li className={styles.nav_item}>
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
                    ongImg={comunitas}
                    titulo="Comunitas"
                    descricao="A organização criou um fundo de apoio à reconstrução do Rio Grande do Sul após a forte chuva que atingiu o Estado. O Reconstrua RS será modelado por meio de uma gestão compartilhada, comitês de atuação e execução privada e com ações prioritárias, entre elas a reorganização das escolas para o retorno das aulas."
                    link="https://www.instagram.com/p/C6rvbvNrgT1/" />

                <CardOng
                    ongImg={ajuris}
                    titulo="Ajuris"
                    descricao="A Ajuris criou uma conta bancária exclusiva para receber doações. Todo o valor arrecadado será utilizado na aquisição de materiais, alimentos e roupas, de acordo com as necessidades apontadas pelas autoridades que gerenciam as crises nos municípios. "
                    link="https://ajuris.org.br/participe-campanha-solidaria-da-ajuris/" />

                <CardOng
                    ongImg={federasul}
                    titulo="Federasul"
                    descricao="A Federasul (Federação de Entidades Empresariais do Rio Grande Sul) e suas 194 entidades afiliadas lançaram a Campanha Solidária para arrecadar fundos para a compra de itens fundamentais para as famílias desabrigadas. A primeira leva de doações deve contemplar a compra de cobertores."
                    link="https://www.federasul.com.br/" />

                <CardOng
                    ongImg={cidadania}

                    titulo="Ação da Cidadania"
                    descricao="ONG fundada por Betinho há 30 anos para combater a fome organiza trabalho humanitário na região."
                    link="https://www.acaodacidadania.org.br/" />


                <CardOng
                    ongImg={uniao}
                    titulo="União BR"
                    descricao="Movimento apartidário, que reúne mais de 4 mil voluntários no Brasil e no mundo. Em parceria com a Latam, está organizando o programa Avião Solidário para transportar doações."
                    link="https://www.movimentouniaobr.com.br/" />
            </div>


        </main>
    )
}

export default OngAnimais;