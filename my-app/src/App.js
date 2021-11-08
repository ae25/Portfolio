import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate, Link, Outlet } from "react-router-dom";
import About from "./Pages/About";
import Layout from "./Components/Layout";
import Home from './Pages/Home';
function App() {
  return (
    <div>
    <Outlet />
    </div>
  
  );
}

export default App;
