import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="page-footer p-5 bg-black text-white">
            <div className="container">
                <div className="d-flex justify-content-between flex-wrap">
                    <div className="footer-left">
                        <h3>Perfume</h3>
                        <p>(066) 696-66-23</p>
                        <br />
                        <p>From 08:00 to 20:00 without breaks and weekends</p>
                    </div>
                    <div className="footer-right">
                        <h3>Social Networks</h3>
                        <a
                            href="https://www.linkedin.com/in/merikbest/"
                            aria-label="LinkedIn Profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin fa-2x mr-3" style={{ color: 'white' }}></i>
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook-f fa-2x mr-3" style={{ color: 'white' }}></i>
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter fa-2x mr-3" style={{ color: 'white' }}></i>
                        </a>
                    </div>
                </div>
                <div className="mx-auto" style={{ width: '200px' }}>
                    <p>© Copyright merikbest</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
