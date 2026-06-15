import React from 'react';
import {  Link} from "react-router-dom";
function Hero() {
    return ( 
    <div className="container p-5">
        <div className="row text-center">
            <div className="col">
                <img src="/Assets/landing.svg" alt="This is Hero image" className='mb-5 w-75 img-fluid'/>
                <h1 className='mt-5 fs-3 fw-bold' style={{color:"#424242"}}>Invest in everything</h1>
                <p style={{color:"#424242"}}className='fs-5'> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
                <Link to='/signup'> 
                <button className='btn btn-primary p-2 fs-5 mt-4 mb-5' style={{width:"20%"}}>Sign up for free</button> </Link>
            </div>
        </div>
    </div>
     );
}

export default Hero;