import './ResetCss.css'
import './DadosResgates.css'

function DadosResgate() {
    return (
        <section className='SectionDadosResgate'>
            <div className='BoxTitleCampanhas'>
                <h2 className='titles'>Pontos de <span className='destaq'>doação</span></h2>
                <p className='subtitle'>Veja as localizações de abrigos e pontos de doação</p>
            </div>
            {/* <div className='ContainerDados'>
                <div className='BoxDados'>
                    +0
                    <p>Campanhas</p>
                </div>
                <div className='BoxDados'>
                    +0
                    <p>ONGs</p>
                </div>
           </div> */}

            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1tdaT-l1u3izolsm772K4XBnFxbjB09c&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
        </section>
    )
}

export default DadosResgate
