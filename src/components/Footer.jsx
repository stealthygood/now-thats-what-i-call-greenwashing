import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p className="copyright">© Climate Karen Productions 2024</p>
                <p className="disclaimer">
                    Not affiliated with Coca-Cola (obviously) or the Now That's What I Call Music franchise (unfortunately).
                </p>
                <div className="sources-list">
                    <p>Sources:</p>
                    <ul>
                        <li>Break Free From Plastic</li>
                        <li>Reuters</li>
                        <li>The Guardian</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
