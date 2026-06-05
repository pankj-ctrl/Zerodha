import React from 'react';
function Hero() {
    return ( 
    <div className="container p-5">
        <div className="row text-centre">
            <div className="col">
                <img src="/Assets/landing.svg" alt="This is Hero image" className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>
                <button className='btn btn-primary'>Sign up for free</button>
            </div>
        </div>
    </div>
     );
}

export default Hero;