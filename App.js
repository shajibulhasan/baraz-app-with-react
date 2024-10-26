
import './App.css';

import Carousel from './Components/Carousel/Carousel';

import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Navber from './Components/Navber/Navber';
import Products from './Components/Products/Products';
import TopBanner from './Components/TopBanner/TopBanner';
import flashSaleData from './Components/Data/flashSaleData';
import barazMallData from './Components/Data/barazMallData';

function App() {
  return (
    <>
     <Navber></Navber>
     <LogoSearchBar/>
     <Carousel/>
     <TopBanner/>
     <Products title='FLASH SALE' products={flashSaleData}/>
     <Products title='BARAZ MALL' products={barazMallData}/>
     {/* <FlashSale/>
     <BarazMall/> */}
    </>
  );
}

export default App;
