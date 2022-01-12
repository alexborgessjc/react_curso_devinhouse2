import './App.css';
import {Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart';
import Books from './pages/Books';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books/>}/>     
        <Route path="/cart" element={<Cart/>}/>  
        <Route path="/details/:id" element={<Details />}/> 
      </Routes>
    </div>
  );
}

export default App;
