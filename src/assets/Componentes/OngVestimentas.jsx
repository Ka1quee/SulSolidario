import { Link } from 'react-router-dom'
import CardOng from './CardOng';
import styles from './OngAnimais.module.css'
import cufa from '../imagens/ongs/cufa.png'
import cruz from '../imagens/ongs/cruz.jpg'
import salvacao from '../imagens/ongs/salvacao.png'
import unibes from '../imagens/ongs/unibes.png'
import lbv from '../imagens/ongs/lbl.png'
import cidadania from '../imagens/ongs/cidadania.png'


function OngAnimais() {
    return (
        <main className={styles.conteudo}>

            <div className={styles.container_nav}>
                <nav className={styles.nav_link}>
                    <ul>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/ongsGerais'>ONGs Gerais</Link>
                        </li>

                        <li className={styles.nav_item} >
                            <Link to='/Categoria/animais'>Animais</Link>
                        </li>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/hospitalar'>Hospitalar</Link>
                        </li>

                        <li className={styles.nav_item} id={styles.atual}>
                            <a href="">Vestimentas</a>
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
                    descricao="Itens a serem doados: água, itens de higiene e limpeza, alimentos não perecíveis e roupas (em ordem de prioridade)."
                    link="https://cruzvermelhasaopaulo.org.br/"
                    instagram="https://www.instagram.com/cruzvermelhasaopaulo/" />

                <CardOng
                    ongImg={salvacao}
                    titulo="Exército da Salvação"
                    descricao="O Exército de Salvação fundado em 1865, atua no 
                    Brasil desde 1922 com unidades de atendimento a crianças em situação de 
                    risco, projetos educacionais, programas de capacitação profissional, 
                    lares para idosos, entre outros."
                    link="https://www.exercitodoacoes.org.br/"
                    instagram="https://www.instagram.com/exercitodoacoes" />

                <CardOng
                    ongImg={cidadania}
                    titulo="Ação da Cidadania"
                    descricao="A ONG criada em 1993 pelo Betinho mobilizou a sociedade para a missão de tirar 32 milhões de pessoas da fome e criou uma conta especial para ajudar a população do Rio Grande do Sul. Para doar, é possível fazer a doação via PIX"
                    link="https://www.acaodacidadania.org.br/"
                    instagram="https://www.instagram.com/acaodacidadania/" />
                <CardOng
                    ongImg={unibes}
                    titulo="Unibes"
                    descricao="A Unibes (União Brasileiro Israelita do Bem Estar Social) atende crianças, adolescentes, idosos e famílias que vivem em situação de vulnerabilidade social. A instituição atua para apoiar a educação no contraturno escolar, capacitar para o trabalho e disseminar o interesse pela cultura e desenvolver a independência."
                    link="https://unibes.org.br/doacao/"
                    instagram="https://www.instagram.com/unibes/ " />


                <CardOng
                    ongImg={lbv}
                    titulo="Legião de boa vontade - LBV"
                    descricao="A LBV é uma associação civil de direito privado, sem fins econômicos, com atuação preponderante na Assistência Social, que também oferece Educação Básica e técnica profissionalizante, além de realizar ações humanitárias, culturais e de comunicação social e educativa. Atua nas cinco regiões do país, em prol de pessoas e famílias em situação de vulnerabilidade social, somando ao auxílio material os valores da Espiritualidade Ecumênica."
                    link="https://doar.lbv.org/"
                    instagram="https://www.instagram.com/lbvbrasil " />

            </div>


        </main>
    )
}

export default OngAnimais;