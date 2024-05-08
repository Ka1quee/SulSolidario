
import { Link } from 'react-router-dom'
import CardOng from './CardOng';
import styles from './OngAnimais.module.css'

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
                            <Link to='/Categoria/resgate'>Resgate</Link>
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
                    titulo="Gerais"
                    endereco="Endereço ong"
                    descricao="Expressamos os nossos votos de boa sorte e solicitamos forças para todos os envolvidos nos esforços de auxílio, especialmente para o povo gaúcho. Que essa mensagem transmita nosso apoio e encorajamento neste momento desafiador."
                    link="youtube.com"
                    instagram="https://www.instagram.com/" />

         

           
                <CardOng
                    titulo="Ongs animal titulo"
                    endereco="Endereço ong"
                    descricao="Expressamos os nossos votos de boa sorte e solicitamos forças para todos os envolvidos nos esforços de auxílio, especialmente para o povo gaúcho. Que essa mensagem transmita nosso apoio e encorajamento neste momento desafiador."
                    link="youtube.com"
                    instagram="https://www.instagram.com/" />

          

         
                <CardOng
                    titulo="Ongs animal titulo"
                    endereco="Endereço ong"
                    descricao="Expressamos os nossos votos de boa sorte e solicitamos forças para todos os envolvidos nos esforços de auxílio, especialmente para o povo gaúcho. Que essa mensagem transmita nosso apoio e encorajamento neste momento desafiador."
                    link="youtube.com"
                    instagram="https://www.instagram.com/" />

            </div>


        </main>
    )
}

export default OngAnimais;