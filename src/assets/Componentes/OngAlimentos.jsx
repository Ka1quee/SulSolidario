import { Link } from 'react-router-dom';
import CardOng from './CardOng';
import styles from './OngAnimais.module.css';
import ongsData from './ongsAlimentosData';

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
                {ongsData.map((ong, index) => (
                    <CardOng
                        key={index}
                        ongImg={ong.ongImg}
                        titulo={ong.titulo}
                        descricao={ong.descricao}
                        link={ong.link}
                        instagram={ong.instagram}
                    />
                ))}
            </div>

        </main>
    );
}

export default OngAnimais;
