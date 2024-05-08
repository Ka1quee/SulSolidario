import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

import './App.css'

import Header from './assets/Componentes/header'
import Footer from './assets/Componentes/Footer'




function App() {

  return (
    <Router>
        <Header />
         <Routes/>
        <Footer />
    </Router>

  )

}

export default App
