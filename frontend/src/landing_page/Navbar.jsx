import React from 'react';
function Navbar() {
    return (
            <nav class="navbar navbar-expand-lg bg-light border-bottom p-3">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="/public/Assets/logo.svg" alt="logo image"  style={{width:"20%"}}/>
                        </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <form class="d-flex" role="search">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Signup</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Support</a>
                            </li>

                        </ul>
                        </form>
                        <i class="fa-solid fa-bars" style={{color:"#666",marginLeft:"2rem",fontSize:"1.2rem"}}></i>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;