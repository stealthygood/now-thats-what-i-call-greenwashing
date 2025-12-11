import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
    return (
        <div className="cta-section">
            <div className="cta-header">
                <h2>BUT WAIT, THERE'S MORE!</h2>
                <p className="cta-subtitle">Don't just listen to the garbage - fight it!</p>
            </div>

            <div className="cta-buttons">
                <a href="https://twitter.com/intent/tweet?text=Hey%20@CocaCola,%20stop%20greenwashing%20and%20start%20reusing!%20%23NowThatsGreenwashing%20%23BreakFreeFromPlastic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn twitter-btn">
                    TWEET THE TRUTH 🐦
                </a>

                <a href="mailto:sustainability@coca-cola.com?subject=Real%20Sustainability%20Now&body=Please%20stop%20blocking%20bottle%20bills%20and%20switch%20to%20reuse."
                    className="cta-btn email-btn">
                    EMAIL THE CEO 📧
                </a>

                <a href="https://www.breakfreefromplastic.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn petition-btn">
                    SIGN THE PETITION ✍️
                </a>
            </div>

            <div className="counter-box">
                <marquee scrollamount="10">
                    *** ALERT: 4,592 PEOPLE HAVE TAKEN ACTION TODAY *** JOIN THE MOVEMENT ***
                </marquee>
            </div>
        </div>
    );
};

export default CallToAction;
