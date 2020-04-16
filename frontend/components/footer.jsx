import React from 'react';

const Footer = () => {
    return (
        <div className="footer-main">
            <div className="social-link">
                <a href="https://www.linkedin.com/in/nicholepatrisse/">
                    <img src={window.linkedin}/>
                </a>
            </div>
            <div className="social-link">
                <a href="https://github.com/nicholepatrisse/">
                    <img src={window.github}/>
                </a>
            </div>
        </div>
)};

export default Footer;