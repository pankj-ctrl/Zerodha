import React from 'react';
function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg bg-light border-bottom p-3">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/public/Assets/logo.svg" alt="logo image"  style={{width:"20%"}}/>
                        </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <form className="d-flex" role="search">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>

                        </ul>
                        </form>
                        <i className="fa-solid fa-bars" style={{color:"#666",marginLeft:"2rem",fontSize:"1.2rem"}}></i>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;