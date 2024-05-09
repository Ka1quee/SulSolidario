import './ResetCss.css'
import './EviteFraudes.css'
import IconZap from '../imagens//home/WhatsApp.png'
import IconPix from '../imagens/home/Pix.png'
import IconCow from '../imagens/home/Cow.png'

function EviteFraudes() {
    return (
        <section className='SectionEviteGolpes'>
            <h2 className='SubTitleGolpes'>Evite cair em <span className='RedColor'>golpes</span></h2>
            <p className='DescriptionGolpes'>Doe apenas para ONGs de sua confiança</p>
            
            <div className='ContainerGolpes'>
                <div className='BoxItensGolpes'>
                    <img src={IconZap} alt="Icone do WhatsApp" className='IconGolpes' />
                    <div className='BoxItensText'>
                        <h3 className='ItensTitle'>WhatsApp</h3>
                        <p className='ItensDescription'>Evite doações a desconhecidos realizadas pelo WhatsApp</p>
                    </div>
                </div>
                <div className='BoxItensGolpes'>
                    <img src={IconPix} alt="Icone do Pix" className='IconGolpes' />
                    <div className='BoxItensText'>
                        <h3 className='ItensTitle'>PIX</h3>
                        <p className='ItensDescription'>Não faça transferencias PIX para desconhecidos </p>
                    </div>
                </div>
                <div className='BoxItensGolpes'>
                    <img src={IconCow} alt="Icon de uma Vaca" className='IconGolpes' />
                    <div className='BoxItensText'>
                        <h3 className='ItensTitle'>Vaquinhas</h3>
                        <p className='ItensDescription'>Não confie em ‘vaquinhas’ publicadas por terceiros</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EviteFraudes
