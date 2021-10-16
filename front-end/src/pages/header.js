import React, {useContext, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import UserContext from "../contexts/UserContext";

function Header({onStart,logout}) {
    const {state}  = useContext(UserContext);
    const {user} = state;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="header-main">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="header-logo">
                            <NavLink to="/"><span className="logo-img" /></NavLink>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="header-menu-box clearfix">
                            <div className="header-navbar-menu clearfix">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="fas fa-bars" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav">
                                            <li className="nav-item menu-menu-parent">
                                                <NavLink to="/store-front" className="nav-link">Store Front</NavLink>
                                            </li>
                                            <li className="nav-item menu-menu-parent">
                                                <NavLink to="/create" className="nav-link">Create NFT</NavLink>
                                            </li>
                                            {
                                                !!user &&   <>
                                                    <li className="nav-item menu-menu-parent">
                                                        <NavLink to="/my-nfts" className="nav-link">My
                                                            NFTs</NavLink>
                                                    </li>
                                                    <li className="nav-item menu-menu-parent d-lg-none">
                                                        <NavLink to="/profile" className="nav-link">My
                                                            Profile</NavLink>
                                                    </li>
                                                    <li className="nav-item menu-menu-parent d-lg-none">
                                                        <a  className="nav-link" role="button" onClick={()=>logout()}>Logout</a>
                                                    </li>

                                                    <li className="header-right d-lg-flex align-items-center d-none">
                                                        <div onMouseEnter={() => setDropdownOpen(true)}
                                                             onMouseLeave={() => setDropdownOpen(false)} className="user-panel-header-top-right">

                                                            <div role="button" className="user-panel-profile">
                                                                <h3  onClick={()=>setDropdownOpen(prevState => !prevState)}><a><span>{user?.username.toUpperCase()[0]}</span></a></h3>
                                                                <div style={{display:dropdownOpen?'block':'none'}} className="profile-dropdown">
                                                                    <ul className="user-links" style={{paddingLeft:'0px'}}>
                                                                        <li><Link to="/profile">Profile</Link></li>
                                                                        <li><a role="button" onClick={()=>logout()}>Logout</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </>
                                            }

                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            {
                                !user &&
                                <div className="header-right-btn d-none d-lg-block d-xl-block">
                                    <ul>
                                        <li onClick={onStart}><button className="theme-btn">Start</button></li>
                                    </ul>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
