import Styles from "./Sobre.module.css";
import Resgate from "../imagens/Resgate.webp";
import Equipe from "../imagens/Equipe.webp";
import BannerNoticia from "./BannerNoticia";
function Sobre() {
  return (
    <main className={Styles.conteudo}>

      <BannerNoticia
      categoria="UNIDOS POR UM PROPÓSITO"
      subtitulo="Doe Hoje, Faça a Diferença"/>

      <section id={Styles.sec1}>
        <div className={Styles.container_section}>
        <div id={Styles.sec1div1}>
          <p>
          Desde a primeira semana de maio, a ruptura de uma barragem resultou na inundação de muitos bairros gaúchos. <br/><br/>
          Muitas famílias foram afetadas,  muitos bens como casas, carros e roupas foram perdidos no processo. 
          </p>
        </div>
        <div id={Styles.sec1div2}>
          <img src={Resgate} alt="Casal sendo resgatado por bombeiro" />
        </div>
        </div>
      </section>

      <section id={Styles.sec2}>
      <div className={Styles.container_section} id={Styles.container_2}>

        <div id={Styles.sec2div1}>
          <img src={Equipe} alt="Equipe do Sul solidário" />
        </div>
        <div id={Styles.sec2div2}>
          <h3 className={Styles.titulo}>Quem somos?</h3>
          <p>
          Com o propósito de auxiliar aqueles que enfrentam dificuldades no Rio Grande do Sul, nós, estudantes de Desenvolvimento Web do Senac/Proa, nos unimos em solidariedade diante da situação ocorrida na primeira semana de maio. 
          </p>
        </div>
        </div>
      </section>

    </main>
  );
}
export default Sobre;
