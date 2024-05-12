import './ResetCss.css'
import './Campanhas.css'
import Carrosel from './Carrosel'

function Campanhas() {
  
    return (
        <section className='SectionCampanhas'>
            <div className='BoxTitleCampanhas'>
                <h2 className='titles'>Campanhas</h2>
                <p className='subtitle'>Empresas que apoiam a causa do <span className='destaq'>Rio Grande do Sul</span></p>
            </div>
           <Carrosel />
        </section>
    )
}

export default Campanhas
