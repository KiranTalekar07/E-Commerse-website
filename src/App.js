import {Routes,Route,BrowserRouter} from 'react-router-dom';
import './App.css';

import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Navbar from './component/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route  path="/" element={<Shop/>}/>
      <Route path='/mens' element={<Shopcategory/>} category="men"/>
      <Route path='/womens' element={<Shopcategory/>} category="women"/>
      <Route path='/kids' element={<Shopcategory/>} category="kid"/>
      <Route path='/product' element={<Products/>}>
      <Route path=':productId' element={<Products/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
