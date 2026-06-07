import React from 'react';
function Stats() {
    return ( 
         <div className="container p-4">
            <div className="row">
                <div className="col-6 p-4">
                    <h3 style={{color:"#424242"}} className='mt-5'>Trust with confidence</h3>
                    <h5 style={{color:"#424242"}} className='fw-medium mt-5'> Customer-first always </h5>
                    <p style={{color:"#666"}} className='lh-lg'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br />lakh crores of equity investments, making us India’s <br />largest broker; contributing to 15% of daily retail<br /> exchange volumes in India. </p>


                    <h5 style={{color:"#424242"}} className='fw-medium mt-4'>No spam or gimmicks</h5>

                    <p style={{color:"#666"}} className='lh-lg'>No gimmicks, spam, "gamification", or annoying push <br />notifications. High quality apps that you use at your<br /> pace, the way you like. Our philosophies.</p>

                    <h5 style={{color:"#424242"}} className='fw-medium mt-4'>The Zerodha universe</h5>

                    <p style={{color:"#666"}} className='lh-lg'>Not just an app, but a whole ecosystem. Our investments <br />in 30+ fintech startups offer you tailored services <br />specific to your needs.</p>

                    <h5 style={{color:"#424242"}} className='fw-medium mt-4'>Do better with money</h5>

                    <p style={{color:"#666"}} className='lh-lg'>With initiatives like Nudge and Kill Switch, we don't just <br />facilitate transactions, but actively help you do better <br />with your money.</p>

                </div>
                <div className="col-6 mt-5 p-4">
                    <img src="/Assets/ecosystem.png" alt="Ecosystem Image" style={{width:"98%",maxWidth:"100%"}} className='mt-5'/>
                    <div className='text-center mt-5'>
                        <a href="" className='me-2'>Explore our products</a><i class="fa-solid fa-arrow-right-long"></i>
                        <a href="" className='ms-5 me-2'>Try Kite demo </a><i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
            </div>
            <div className="row p-2 mt-5 mb-5">
                <div className="col ">
                    <img src="/Assets/kc-logo-landing.svg" alt="kite image" />
                </div>
                <div className="col-8">
                    <p style={{color:"#666", fontSize:"0.875rem " }} className=''>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs <br /> to place orders, stream market data, manage your account, and more.</p>
                </div>
                <div className="col">
                   <img src="/Assets/kc-banner-image.svg" alt="kc banner"  style={{width:"95%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Stats;