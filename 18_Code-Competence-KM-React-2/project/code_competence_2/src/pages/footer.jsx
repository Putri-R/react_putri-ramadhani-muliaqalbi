import './style.css';
import footerLogo from './asset/footer-logo.png'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function Footer(){
    return(
        <>
            {/* footer */}
            <footer>
                <div className="footer-group">
                <img src={footerLogo} alt="" />
                <p>
                    Wear.it is one of the best clothing and shoe stores you can shop at.
                    Dazzle with new colors and styles with us
                </p>
                <div className="footer-address">
                    <h4>Address</h4>
                    <p>Balam Street, No. 02, Indonesia</p>
                    <h4>Telp. +6281200114523</h4>
                </div>
                </div>
                <div className="footer-group">
                <h4>General</h4>
                <div className="general-group">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Contact</a>
                </div>
                </div>
                <div className="footer-group">
                    <h4>Follow Us</h4>
                    <div className="footer-socialmedia">
                        <div className='socialmedia-group'>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter" style={{ color: "#ffffff" }}/>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram" style={{ color: "#ffffff" }}/>
                            </a>
                        </div>
                        <div className='socialmedia-group'>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" className="linkedin" style={{ color: "#ffffff" }}/>
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" className="whatsapp" style={{ color: "#ffffff" }}/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* copyright */}
            <div className="copyright">
                <p>Copyright Wear it 2023, All Rights Reserved</p>
            </div>
        </>
    )
}