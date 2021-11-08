import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import {  Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Layout from './Components/Layout';
import { Navbar } from './Components/Navbar';

ReactDOM.render(
  
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/*" element={<Home/>} />
    <Route path="about" element={<About />} />
  </Routes>
  
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
