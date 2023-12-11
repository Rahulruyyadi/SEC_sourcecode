import './Footer.css';
import React from 'react'
import { Link } from 'react-router-dom'
import Resources from './Resources';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
export default function Footer() {
    const [show, setshow] = useState(false);
    const handleshow= ()=> {
        setshow(!show);
        console.log(show);
    };
    return (
        <div className="footer">
            <div className='grid-box'>
                <ul className='footer-links'>
                    <Link className='footer-links-1' to="SEC/"        > <li > HOME      </li></Link >
                    <Link className='footer-links-1' to="SEC/team"    > <li > TEAM      </li></Link >
                    <Link className='footer-links-1' to="SEC/events"  > <li >EVENTS     </li></Link >
                    <Link className='footer-links-1' to="SEC/gallery" > <li >GALLERY    </li></Link >
                    <Link className='footer-links-1' to="SEC/podcast" > <li >PODCASTS   </li></Link >
                    <Link className='footer-links-1' to="SEC/articles"> <li >ARTICLES   </li></Link >
                    
                </ul>
                <div className='social-media'>
                    <a href="https://www.facebook.com/Science-and-Environment-Club-100000000000000" rel=' noreferer' target="_blank"><FaFacebook /></a>
                    <a href="https://www.instagram.com/science_and_environment_club/" rel='noreferer' target="_blank"><FaInstagram /></a>
                    <a href="https://twitter.com/sec_nitp?s=20" rel='noreferer' target="_blank"><FaTwitter /></a>
                </div>
            </div>
        </div>

    )
}
