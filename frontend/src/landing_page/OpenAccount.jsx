import React from 'react';

function OpenAccount() {
    return (
        <div className="container mt-5 p-4">
            <div className="row text-center">
                <h3 className='mt-5 fs-3 fw-bold' style={{color:"#424242"}}>Open a Zerodha account</h3>
                <p style={{color:"#424242"}}className='fs-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='btn btn-primary p-2 fs-5 mt-4 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign Up for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;