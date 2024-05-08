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
            Com o propósito de auxiliar aqueles que enfrentam dificuldades no
            Rio Grande do Sul, nós, um grupo de amigos, nos unimos em
            solidariedade diante da situação ocorrida na primeira semana de
            maio. A ruptura de uma barragem resultou na inundação de importantes
            bairros gaúchos.
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
            Expressamos os nossos votos de boa sorte e solicitamos forças para
            todos os envolvidos nos esforços de auxílio, especialmente para o
            povo gaúcho. Que essa mensagem transmita nosso apoio e encorajamento
            neste momento desafiador.
          </p>
        </div>
        </div>
      </section>

    </main>
  );
}
export default Sobre;
