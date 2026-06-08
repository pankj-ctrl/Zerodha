import React from 'react';
function Education() {
    return (
        <div className="container p-4 mt-5 mb-5">
            <div className="row">
                <div className="col">
                    <img src="/Assets/education.svg" alt="Education image" />
                </div>
                <div className="col">
                    <h3 style={{color:"#424242"}} className='mt-5'>Free and open market education</h3>

                   <p style={{color:"#666"}} className='lh-lg mt-4'> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                   <div>
                    <a href="" className='me-2' style={{textDecoration:"none"}}>Varsity</a>
                    <i class="fa-solid fa-arrow-right-long" style={{color:"#6971e0"}}></i>
                   </div>
                    

                    <p style={{color:"#666"}} className='lh-lg mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <div>
                      <a href="" className='me-2' style={{textDecoration:"none"}}>TradingQ&A</a>
                      <i class="fa-solid fa-arrow-right-long" style={{color:"#6971e0"}}></i>
                    </div>
                    
                </div>
            </div>
        </div>


    );
}

export default Education;