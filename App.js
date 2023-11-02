
import './App.css';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Slide from './Components/Slide';
import Products from './Components/Products';

function App() {
  return (
    <div>
    <Navbar/>
    <Slide/>
    <Products/>
    </div>
  );
}

export default App;
