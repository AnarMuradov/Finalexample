import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Addpage from './pages/AddPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<MainLayout/>}>
        <Route path="/"  element={<Home/>}/>
        <Route path='/Basket' element={<Basket/>}/>
        <Route path="/Addpage"  element={<Addpage/>}/>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
