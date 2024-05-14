// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {register} from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ResetCss.css'
import './Campanhas.css'
import LogoCorreios from '../imagens/ImagensCarrosel/CorreiosLogo.png'
import LogoCufa from '../imagens/ImagensCarrosel/CufaLogo.png'
import BbLogo from '../imagens/ImagensCarrosel/BbLogo.png'
import AcaoLogo from '../imagens/ImagensCarrosel/AcaoLogo.png'
import BrfLogo from '../imagens/ImagensCarrosel/BrfLogo.png'
import FruikiLogo from '../imagens/ImagensCarrosel/FrukiLogo.png'
import GerdauLogo from '../imagens/ImagensCarrosel/GerdauLogo.png'
import HavanLogo from '../imagens/ImagensCarrosel/HavanLogo.png'
import MarfrigLogo from '../imagens/ImagensCarrosel/MarfrigLogo.png'
import MercadoLivreLogo from '../imagens/ImagensCarrosel/MercadoLivreLogo.png'
import ChangeLogo from '../imagens/ImagensCarrosel/ChangeLogo.png'
import Senac from '../imagens/ImagensCarrosel/senac.png'

function Carrossel() {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={5}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 300 }}
      style={{ paddingBottom: '30px' }}
      speed={500}
      loop={true}
    >
        <SwiperSlide><a href="https://www.correios.com.br/central-de-informacoes/postagens-destinadas-ao-rio-grande-do-sul" target='_blank'><img src={LogoCorreios} className='Logos' /></a></SwiperSlide>
        <SwiperSlide><a href="https://cufa.org.br/" target='_blank'><img src={LogoCufa} className='Logos' /></a></SwiperSlide>
        <SwiperSlide><a href="https://www.instagram.com/institutoplayingforchange/" target='_blank'><img src={ChangeLogo} className='Logos'/></a></SwiperSlide>
        <SwiperSlide><a href="https://www.instagram.com/p/C6kHakguFAU/" target='_blank'><img src={MercadoLivreLogo} className='Logos' /></a></SwiperSlide>
        <SwiperSlide><a href="https://www.marfrig.com.br/pt/home" target='_blank'><img src={MarfrigLogo} className='Logos' /></a></SwiperSlide>
        <SwiperSlide><a href="https://www2.gerdau.com.br/noticias/gerdau-anuncia-novas-medidas-em-apoio-a-populacao-do-rio-grande-do-sul/" target='_blank'><img src={GerdauLogo} className='Logos' /></a></SwiperSlide>
        <SwiperSlide><a href="https://fruki.com.br/" target='_blank'><img src={FruikiLogo} className='Logos' /></a></SwiperSlide>
        <SwiperSlide><a href="https://www.brf-global.com/" target='_blanck'><img src={BrfLogo} className='Logos' /></a></SwiperSlide>
        <SwiperSlide><a href="https://oglobo.globo.com/brasil/sos-rio-grande-do-sul/noticia/2024/05/09/catastrofe-no-rs-banco-do-brasil-vai-doar-r-50-milhoes-para-o-estado.ghtml" target='_blank'><img src={BbLogo} className='Logos' /></a></SwiperSlide>
        <SwiperSlide><a href="https://www.acaodacidadania.org.br/" target='_blank'><img src={AcaoLogo} className='Logos' /></a></SwiperSlide>
        <SwiperSlide><a href="https://www.sp.senac.br/senac-lapa-tito" target='_blank'><img src={Senac} className='Logos'/></a></SwiperSlide>
    </Swiper>
      )
    }


export default Carrossel 