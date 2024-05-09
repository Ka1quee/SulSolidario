import { Routes, Route } from 'react-router-dom'
import Categorias from './assets/Componentes/Categoria';
import OngAnimais from './assets/Componentes/OngAnimais';
import OngResgate from './assets/Componentes/OngResgate';
import OngVestimentas from './assets/Componentes/OngVestimentas';
import OngAlimentos from './assets/Componentes/OngAlimentos';
import Sobre from './assets/Componentes/Sobre';
import Noticias from './assets/Componentes/Noticia';
import OngsGerais from './assets/Componentes/OngsGerais';
import Home from './assets/Componentes/Home';





function MainRoutes() {
    return (
        <Routes > 
            <Route path='/Categoria' element={<Categorias />}>
                <Route path='/Categoria/ongsgerais' element={<OngsGerais />} />
                <Route path='/Categoria/resgate' element={<OngResgate />} />
                <Route path='/Categoria/animais' element={<OngAnimais />} />
                <Route path='/Categoria/vestimentas' element={<OngVestimentas />} />
                <Route path='/Categoria/alimentos' element={<OngAlimentos />} />
            </Route>


            <Route path='/' element={<Home />} />
            <Route path='/Sobre' element={<Sobre />} />
            <Route path='/Categoria/animais' element={<OngAnimais />} />
            <Route path='/Noticias' element={<Noticias />} />

        </Routes>
    )
}

export default MainRoutes;

