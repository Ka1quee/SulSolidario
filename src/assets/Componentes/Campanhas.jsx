import './ResetCss.css'
import './Campanhas.css'
import Carrosel from './Carrosel'

function Campanhas() {
  
    return (
        <section className='SectionCampanhas'>
            <div className='BoxTitleCampanhas'>
                <h2 className='SubTitleCampanhas'>Campanhas</h2>
                <p className='Description'>Empresas que apoiam a causa</p>
            </div>
           <Carrosel />
        </section>
    )
}

export default Campanhas
