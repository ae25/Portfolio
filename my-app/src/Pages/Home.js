import React from 'react';
import Typewriter from 'typewriter-effect';
import Card from "../Components/Cards";
import Main from '../Components/Main';
import "./Home.css"
import { BrowserRouter } from 'react-router-dom';
const Home = () => {
    return (
        <div >
        <Main/>
        <Card/>
      </div>
    );
}

export default Home;
