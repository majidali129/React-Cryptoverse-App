import { Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import Coins from './components/Coins'
import Exchanges from './components/Exchanges'
import News from './components/News'
import CoinDetails from './components/CoinDetails'
import Header from './components/Header';
import Loader from './shared/Loader'
import { CoinContext } from './context/contextApi';

function App() {
  
  
  return (
    <CoinContext>
      {/* <Loader/> */}
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='coins' element={<Coins/>} />
        <Route path='exchanges' element={<Exchanges/>} />
        <Route path='news' element={<News/>} />
        <Route path='coins/:id' element={<CoinDetails/>} />
      </Routes>
    </CoinContext>

  );
}

export default App;
