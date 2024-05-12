import { Link } from 'react-router-dom'
import CardOng from './CardOng';
import styles from './OngAnimais.module.css'
import grad from '../imagens/ongs/grad.png'
import cbc from '../imagens/ongs/cbc.png'
import grabh from '../imagens/ongs/grupoResgateAnimal.png'
import caramelo from '../imagens/ongs/caramelo.png'
import pataFacinhos from '../imagens/ongs/patasfocinhos.png'
import patinhas from '../imagens/ongs/patinhas.png'






function OngAnimais() {
    return (
        <main className={styles.conteudo}>

            <div className={styles.container_nav}>
                <nav className={styles.nav_link}>
                    <ul>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/ongsGerais'>ONGs Gerais</Link>
                        </li>

                        <li className={styles.nav_item} id={styles.atual}>
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
                    ongImg={grad}
                    titulo="GRAD Brasil"
                    descricao="O Grupo de Resposta a Animais em Desastres (GRAD) é um grupo de voluntários composto por mais de 80 membros, de diferente áreas de atuação e estados Brasileiros, com objetivo de promover ajuda humanitária aos animais e pessoas em circunstâncias de vulnerabilidade em desastres e comunidades isoladas, com equipe técnica qualificada e capacitada para atuar em diferentes situações."
                    link="https://gradbrasil.org.br/apoie-o-grad/"
                    instagram="https://www.instagram.com/" />


                <CardOng
                    ongImg={cbc}
                    titulo="Campo Bom pra Cachorro"
                    descricao="A ONG Campo Bom Pra Cachorro, localizada no Rio Grande do Sul, é uma organização dedicada ao bem-estar animal, especialmente de cães. Seu trabalho envolve resgate, reabilitação e adoção de animais em situações de risco ou abandono. Por meio de voluntários e doações, a instituição busca proporcionar uma vida melhor para os animais."
                    link="https://www.instagram.com/p/C6gI_gRufKJ/?img_index=2"
                    instagram="https://www.instagram.com/campobompracachorro/" />


                <CardOng
                    ongImg={grabh}
                    titulo="GRABH"
                    descricao="O GRABH é uma organização dedicada a salvar animais em situações críticas, com uma equipe apaixonada e comprometida com resgates em momentos de desastre. Atuamos no Brasil há anos, resgatando animais em risco e oferecendo cuidados essenciais. Nada disso seria possível sem a solidariedade de pessoas como você."
                    link="https://gruporesgateanimal.com/operacaosul"
                    instagram="https://www.instagram.com/resgateanimal.grabh/" />

                <CardOng
                    titulo="Instituto Caramelo"
                    ongImg={caramelo}
                    descricao="Fundado em fevereiro de 2015 o Instituto Caramelo atua principalmente no resgate de animais feridos ou em situação de risco, recuperação e adoção. Mantemos um abrigo com cerca de 300 animais, entre cães e gatos, todos resgatados das ruas, onde eles são protegidos, tratados, alimentados e aguardam pela chance de serem adotados."
                    link="https://institutocaramelo.org/doe"
                />

                <CardOng
                    ongImg={pataFacinhos}
                    titulo="Ong Patas e Focinhos"
                    descricao="Somos uma Organização não governamental (ONG) do Rio Grande do Sul- Não temos sede ou equipe de resgate. Somos voluntários por amor aos peludos. Atuamos em animais abandonados, quando possível (condições e espaço)."
                    link="https://www.instagram.com/p/C6rPG25p0Ux/?img_index=1"
                    instagram="https://www.instagram.com/ongpatasfocinhos/?img_index=1" />

                <CardOng
                    ongImg={patinhas}
                    titulo="Instituto Patinhas"
                    descricao="O Instituto Patinhas é Sem Fins Lucrativos, formado por voluntários que amam e dedicam parte de seu tempo para a causa animal. Não temos sede física e os cães que resgatamos ficam em Lares Temporários que são custeados com as doações que recebemos. Percebemos que os animais precisam muito de nossa ajuda pois são criaturas que não sabem falar e nem se defender!"
                    link="https://www.instagram.com/p/C6rP2pqOAiv/"
                    instagram="https://www.instagram.com/institutopatinhascaxias/" />
            </div>
        </main>
    )
}

export default OngAnimais;