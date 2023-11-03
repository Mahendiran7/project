
import './App.css';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Slide from './Components/Slide';
import Products from './Components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart.js';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
    <Slide/>
      <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Toaster/>
      </BrowserRouter>
  
    
    </div>
  );
}

export default App;
