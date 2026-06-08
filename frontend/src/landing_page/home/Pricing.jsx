import React from 'react';

function Pricing() {
    return (
        <div className="container p-5">
            <div className="row align-items-center">
                
                {/* Left Side: Text Content */}
                <div className="col-md-5">
                    <h3 style={{ color: "#424242" }} className='mb-3'>Unbeatable pricing</h3>
                    <p style={{ color: "#666" }} className='lh-lg'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <div>
                        {/* React mein class ki jagah className use hota hai */}
                        <a href="#" className='me-2' style={{ textDecoration: "none", fontWeight: "500" }}>
                            See pricing <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>

                {/* Right Side: Pricing Items */}
                <div className="col-md-7 mt-5 mt-md-0">
                    <div className="row">
                        
                        {/* Item 1 */}
                        {/* d-flex aur align-items-center image aur text ko aamne-saamne layega */}
                        <div className="col-4 d-flex align-items-center">
                            <img src="/Assets/pricing0.svg" alt="0" style={{ width: "60%", maxWidth: "100px" }} />
                            <p style={{ fontSize: "0.70rem", color: "#666", margin: "0 0 0 10px", lineHeight: "1.4" }} className='mt-4'>
                                Free account <br /> opening
                            </p>
                        </div>
                        
                        {/* Item 2 */}
                        <div className="col-4 d-flex align-items-center">
                            <img src="/Assets/pricing0.svg" alt="0" style={{ width: "80%", maxWidth: "100px" }} />
                            <p style={{ fontSize: "0.70rem", color: "#666", margin: "0 0 0 10px", lineHeight: "1.4" }} className='mt-4' >
                                Free equity delivery <br /> 
                            </p>
                        </div>
                        
                        {/* Item 3 */}
                        <div className="col-4 d-flex align-items-center">
                            <img src="/Assets/other-trades.svg" alt="20" style={{ width: "60%", maxWidth: "100px" }} />
                            <p style={{ fontSize: "0.70rem", color: "#666", margin: "0 0 0 10px", lineHeight: "1.4" }} className='mt-4'>
                                Intraday and <br /> F&O
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;