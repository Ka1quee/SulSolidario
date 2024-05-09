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

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide><img src={LogoCorreios} className='Logos' /></SwiperSlide>
        <SwiperSlide><img src={LogoCufa} className='Logos' /></SwiperSlide>
        <SwiperSlide><img src={ChangeLogo} className='Logos' /></SwiperSlide>
        <SwiperSlide><img src={MercadoLivreLogo} className='Logos' /></SwiperSlide>
        <SwiperSlide><img src={MarfrigLogo} className='Logos' /></SwiperSlide>
        <SwiperSlide><img src={HavanLogo} className='Logos' /></SwiperSlide>
        <SwiperSlide><img src={GerdauLogo} className='Logos' /></SwiperSlide>
        <SwiperSlide><img src={FruikiLogo} className='Logos' /></SwiperSlide>
        <SwiperSlide><img src={BrfLogo} className='Logos' /></SwiperSlide>
        <SwiperSlide><img src={BbLogo} className='Logos' /></SwiperSlide>
        <SwiperSlide><img src={AcaoLogo} className='Logos' /></SwiperSlide>

    </Swiper>
  )
}