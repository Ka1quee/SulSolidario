import Styles from '../Componentes/DoacoesBanner.module.css'

function DoacoesBanner(){
    return (
        <div>
           <div className={Styles.banner}>
            <h1 className={Styles.h1doacao}>UNIDOS POR UM PROPÓSITO</h1>
            <p className={Styles.pdoacao}>Doe Hoje, Faça a Diferença</p>

           </div>
           
           
        </div>

    )
}

export default DoacoesBanner