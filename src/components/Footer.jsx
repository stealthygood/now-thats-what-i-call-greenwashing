import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p className="copyright">© Climate Karen Productions 1999</p>
                <p className="disclaimer">
                    Not affiliated with Coca-Cola (obviously) or the Now That's What I Call Music franchise (unfortunately).
                </p>
                <div className="sources-list">
                    <p>Sources:</p>
                    <ul>
                        <li><a href="https://brandaudit.breakfreefromplastic.org/" target="_blank" rel="noopener noreferrer">Break Free From Plastic</a></li>
                        <li><a href="https://talking-trash.com/" target="_blank" rel="noopener noreferrer">Talking Trash</a></li>
                        <li><a href="https://www.reuters.com/investigates/special-report/plastic-pollution-coca-cola-recycling/" target="_blank" rel="noopener noreferrer">Reuters Investigation</a></li>
                        <li><a href="https://www.theguardian.com/environment/2021/may/22/coca-cola-plantbottle-marketing-hype-green-solution" target="_blank" rel="noopener noreferrer">The Guardian</a></li>
                        <li><a href="https://theintercept.com/2019/10/18/coca-cola-recycling-plastics-pollution/" target="_blank" rel="noopener noreferrer">The Intercept</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
