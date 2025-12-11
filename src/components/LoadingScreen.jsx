import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="cd-loader">
                <div className="cd-inner-circle"></div>
            </div>
            <h2 className="loading-text">READING DISC...</h2>
            <div className="loading-bar-container">
                <div className="loading-bar"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
