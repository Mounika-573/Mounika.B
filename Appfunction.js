import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './login';
import Registration from './login';
import { useEffect } from 'react';
function App() {
  return (
    <div>
      <>
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout/>}>
         <Route index element={<Registration/>}/>
         <Route path='login' element={<login/>}/>
         <Route path=" " element={<signup/>}/>
         </Route>
         </Routes></BrowserRouter>
    <useEffect/>
    </> 
    </div>
  );
}

export default App;
