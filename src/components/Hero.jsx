import React from 'react';
import albumCover from '../assets/album-cover.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="album-art-wrapper">
                <img src={albumCover} alt="Now That's What I Call Greenwashing Album Cover" className="album-art" />

                {/* Overlaid Badges/Stickers - pure CSS since image gen failed for these */}
                <div className="sticker sticker-tv">
                    AS SEEN ON <br /> TV!
                </div>
                <div className="sticker sticker-pollution">
                    #1 PLASTIC <br /> POLLUTER
                </div>

                <div className="hero-title-overlay">
                    <h1 className="main-title">NOW THAT'S WHAT I CALL <br /> <span className="greenwashing-text">GREENWASHING!</span></h1>
                    <h2 className="subtitle">Vol. 34 (Years of Broken Promises)</h2>
                </div>
            </div>

            <div className="hero-marketing-bar">
                <p>FEATURING ALL YOUR FAVORITE CORPORATE LIES!</p>
            </div>
        </div>
    );
};

export default Hero;
