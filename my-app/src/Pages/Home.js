import React from 'react';
import Typewriter from 'typewriter-effect';
import "./Home.css"
const Home = () => {
    return (
        <div id="paragraphWrapper">
        <p id="body-text">
          Hi, my name is Andres. I’m a
          <span id="typewriter-span">
            <Typewriter
              options={{
                strings: [" Ux Designer", " Front-End Developer", " Gamer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          from White Plains, New York and I am currently interning for Pantsuit
          Professionals based in the New York City area.
        </p>
      </div>
    );
}

export default Home;
