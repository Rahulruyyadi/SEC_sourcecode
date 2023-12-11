import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
function Header() {
    return (
        <>
        <div className="bg2">
        <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <div ><img className="logo-style" src="https://res.cloudinary.com/dluyslfrm/image/upload/v1679252571/SEC_logo_3_mipz8c.png"/></div>
                  <h2 className="science">SCIENCE AND ENVIRONMENT CLUB</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse back-color" id="navbarSupportedContent">
                        <div className="navbar-nav link-items ml-auto items-box nav-link-position">
                            <Link to="SEC/" className="nav-link "><li >HOME </li></Link>
                            <Link to="SEC/team" className="nav-link ">  <li > TEAM</li></Link> 
                            <Link to="SEC/events" className='nav-link '> <li >EVENTS</li></Link>
                            <Link to="SEC/gallery" className='nav-link '> <li >GALLERY</li></Link>
                            <Link to="SEC/podcast" className='nav-link '> <li >PODCASTS</li></Link>
                            <Link to="SEC/articles" className='nav-link '>  <li >ARTICLES</li></Link>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
            

        </>

    )
}

export default Header