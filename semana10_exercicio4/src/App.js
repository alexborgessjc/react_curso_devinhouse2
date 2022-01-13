import './App.css';
import {Routes, Route} from 'react-router-dom';
import Books from './pages/Books';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Menu from './pages/Menu';

function App() {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/books" element={<Books/>}/>
        <Route path="/cart" element={<Cart/>}/>  
        <Route path="/details/:id" element={<Details />}/> 
      </Routes>      
    </div>
  );
}

export default App;