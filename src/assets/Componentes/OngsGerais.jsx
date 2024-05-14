import { Link } from 'react-router-dom'
import CardOng from './CardOng';
import styles from './OngAnimais.module.css'
import ajuris from '../imagens/ongs/ajuris.png'
import sobradinho from '../imagens/ongs/sobradinho.png'
import federasul from '../imagens/ongs/federasul.png'
import cidadania from '../imagens/ongs/cidadania.png'
import comunitas from '../imagens/ongs/comunitas.png'
import uniao from '../imagens/ongs/uniao.png'
import rotary from '../imagens/ongs/rotary.png'





function OngAnimais() {
    return (
        <main className={styles.conteudo}>

            <div className={styles.container_nav}>
                <nav className={styles.nav_link}>
                    <ul>

                        <li className={styles.nav_item}>
                            <Link to='/Categoria/ongsGerais' id={styles.atual}>ONGs Gerais</Link>
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
                    ongImg={ajuris}
                    titulo="Ajuris"
                    descricao="A Associação dos Juízes do Rio Grande do Sul foi fundada em 11 de agosto de 1944, congregando magistrados do Estado do Rio Grande do Sul. A AJURIS tem como finalidades, entre outras previstas no seu Estatuto, prestar assistência aos seus associados, promover a formação e o aprimoramento profissional e zelar pela afirmação das garantias constitucionais da magistratura."
                    link="https://ajuris.org.br/participe-campanha-solidaria-da-ajuris/" />

                <CardOng
                    ongImg={federasul}
                    titulo="Federasul"
                    descricao="A Federasul (Federação de Entidades Empresariais do Rio Grande Sul) e suas 194 entidades afiliadas lançaram a Campanha Solidária para arrecadar fundos para a compra de itens fundamentais para as famílias desabrigadas. A primeira leva de doações deve contemplar a compra de cobertores."
                    link="https://www.federasul.com.br/" />

                <CardOng
                    ongImg={cidadania}

                    titulo="Ação da Cidadania"
                    descricao="A Ação da Cidadania, fundada em 1993 pelo sociólogo Herbert de Souza, o Betinho, é um movimento social de grande impacto no Brasil. Surgiu para combater a pobreza, ajudando 32 milhões de brasileiros. É conhecida por sua ampla rede de mobilização nacional, com comitês locais de lideranças comunitárias e participação de diversos setores sociais."
                    link="https://doacao.acaodacidadania.org.br/cocacola" />


                <CardOng
                    ongImg={uniao}
                    titulo="União BR"
                    descricao="O União BR é um movimento apartidário que serve como intermediário entre pessoas dispostas a ajudar e aquelas que necessitam de ajuda. Com mais de 4 mil voluntários no Brasil e no exterior, busca fortalecer movimentos estaduais conectando participantes da rede. Fundado em 2020 para combater os efeitos da pandemia, já beneficiou mais de 26 milhões de pessoas e 4 mil ONGs, fornecendo equipamentos médicos, alimentos e apoio para emergências nacionais e internacionais, incluindo o auxílio aos biomas do Pantanal e da Amazônia, bem como assistência para refugiados na Ucrânia."
                    link="https://www.instagram.com/p/C6fFFlSNhZw/" />

                <CardOng
                    ongImg={comunitas}
                    titulo="Comunitas"
                    descricao="A Comunitas é uma organização da sociedade civil especializada em modelar e implementar parcerias sustentáveis entre os setores público e privado, gerando maior impacto do investimento social, com foco na melhoria dos serviços públicos, consequentemente, da vida da população. Abaixo você pode conhecer os principais programas desenvolvidos pela organização."
                    link="https://comunitas.org.br/fundo-reconstruars-vai-apoiar-na-retomada-da-educacao-no-rio-grande-do-sul/" /> 

                    
                <CardOng
                    ongImg={rotary}
                    titulo="Rotary Brasil"
                    descricao="A Rotary Brasil é uma parte do Rotary International, uma organização global de serviço voluntário fundada em 1905. Com mais de 2.500 clubes e 50.000 membros, o Rotary Brasil se dedica a promover a paz, combater doenças, fornecer água limpa, apoiar a saúde materno-infantil, educação e desenvolvimento econômico. Seu lema é Dar de Si Antes de Pensar em Si, refletindo seu compromisso com o serviço altruístico e ético."
                    link="https://www.instagram.com/p/C6ykEyarp14/" />
            </div>


        </main>
    )
}

export default OngAnimais;