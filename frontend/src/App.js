import React from 'react';
import './App.css';

/* Components */
import Navbar from './components/Navbar';
import FormBuy from './components/FormBuy';
import CarouselSlider from './components/CarouselSlider';
import ContainerIntroduce from './components/ContainerIntroduce';
import ContainerSpec from './components/ContainerSpec';
import Rate from './components/Rate';
import OrderInfo from './components/OrderInfo';
import Footer from './components/Footer';
import ProfitCard from "./components/ProfitCard";
import GifDiskon from "./components/GifDiskon";
import FirstImage from "./components/FirstImage";
import FirstDesc from "./components/FirstDesc";
import MiddleImages from "./components/MiddleImages";
import SecondDesc from "./components/SecondDesc";
import Noted from './components/Noted';
import Retur from './components/Retur';

function App() {
  return (
    <>
      <Navbar />
      <GifDiskon />
      <FirstImage />
      <FirstDesc />
      <FormBuy />
      <CarouselSlider />
      <ContainerIntroduce />
      <ProfitCard />
      <ContainerSpec />
      <MiddleImages />
      <Noted />
      <Retur />
      <FormBuy />
      <SecondDesc />
      <Rate />
      <OrderInfo />
      <Footer />
    </>
  );
}

export default App;
