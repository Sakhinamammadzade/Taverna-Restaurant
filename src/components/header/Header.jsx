
import React from 'react'
import { Link } from 'react-router-dom'
import "../header/header.scss";
import logo from "../../assets/logo.png"
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="nav-menu">
                    <div className="leftside" >
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link>Menu</Link></li>
                            <li><Link>Faq</Link></li>
                            <li><Link>Uber Eats</Link></li>
                          
                        </ul>
                        <div />


                    </div>
                    <div className="logo">
                        <li><Link to="/"><img src={logo} alt="" /></Link></li>
                    </div>
                    <div className="header-rightside">
                        <ul>
                            <li><Link>Pages</Link></li>
                            <li><Link to="/About">About Us</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>Contact Us </Link></li><MailOutlineIcon style={{color:"#f7ac5d",paddingTop:"0px"}}/>
                        </ul>
                    </div>
                  
                </div>
            </div>
        </header>
     





    )
}

export default Header
