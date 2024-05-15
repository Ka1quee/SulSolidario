import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import VLibras from "@djpfs/react-vlibras"; // Importe o componente VLibras

import './App.css';
import Header from './assets/Componentes/header';
import Footer from './assets/Componentes/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <VLibras />  */}
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
