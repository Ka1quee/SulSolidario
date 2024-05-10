import './Faixa1.css'
import './ResetCss.css'
import { Link } from 'react-router-dom'

function Faixa1() {
    return (
        <section className="doe">
            <div className="infos">
                <h1 className="unidos"> Unidos Pelos Atingidos</h1>
                <h2 className="resp">Responda ao Apelo. Transforme <span className="dor">DOR</span> em <span className="verde">ESPERANÇA</span></h2>
                <div className="button-container">
                    <div className="button-wrapper">
                        <Link to='/Categoria/ongsGerais' className="doe_aqui">Doe aqui</Link>
                    </div>
                    <div className="button-wrapper">
                        <a href='https://beacons.ai/sulsolidario' className="link_governo" target='_blank'>Orgãos Governamentais</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faixa1;