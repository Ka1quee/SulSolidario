
import styles from './headerTest.module.css'


function HeaderTest() {
  return (
  <div>
        <header class="desktop-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div id="logo-nav">
                {/* <img src="img/image-removebg-preview 1.png" alt="Logo Praiagens"> */}
                <p>Praiagens</p>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sobre.html">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pacotes.html">Pacotes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pacotes.html">Promoções</a>
                    </li>
                </ul>
                <div id="nav-buttons">
                    <div class="noturno">
                        <div class="noturno-escolha">
                        </div>
                    </div>
                        <a href="login.html">Entrar</a>
                        <a href="cadastro.html"><button>Cadastro</button></a>
                </div>
            </div>
        </nav>
    </header>

    <header class="mobile-header">
        <nav class="navbar navbar-light bg-light">
            <div id="logo-nav">
                {/* <img src="img/image-removebg-preview 1.png" alt=""> */}
                <p>Praiagens</p>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavMobile" aria-controls="navbarNavMobile" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavMobile">
                <button class="close-menu" type="button" data-toggle="collapse" data-target="#navbarNavMobile" aria-controls="navbarNavMobile" aria-expanded="true" aria-label="Toggle navigation">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div id="nav-buttons">
                    <button class="btn btn-outline-dark">Entre ou Cadastre</button>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="sobre.html">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="pacotes.html">Pacotes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Promoções</a>
                    </li>
                </ul>
                <div id="ajuda-mobile">
                    <h3 class="titulo-2">Ajuda</h3>
                    <ul>
                        {/* <li><img src="img/icones-responsivo-nav/prancheta 1.png" alt=""> Como remarcar o voo?</li>
                        <li><img src="img/icones-responsivo-nav/carteira 1.png" alt=""> Como fazer check-in?</li>
                        <li><img src="img/icones-responsivo-nav/forma-de-pagamento 1.png" alt=""> Tem reembolso?</li>
                        <li><img src="img/icones-responsivo-nav/pergunta-para-fazer-login-em-circulos 1.png" alt=""> Outras dúvidas</li> */}
                    </ul>
                </div>                
            </div>
        </nav>
    </header> 
  </div>
  )
}

export default HeaderTest
