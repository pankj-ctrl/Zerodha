function Hero() {
    return ( 
        <div className="container" style={{marginTop:"8rem",marginBottom:"8rem"}}>
            <div className="row text-center mt-5 mb-5">
                <h4 style={{fontSize:"1.75rem",color:"#424242"}}>Charges</h4>
                <p style={{fontSize:"1.25rem",fontWeight:"400"}}>List of all charges and taxes</p>
            </div>
            <div className="row text-center" style={{marginTop:"5rem"}}>
                <div className="col">
                    <img src="/Assets/pricing0.svg" alt="This is pricing 0 svg image" style={{width:"75%"}} />
                    <h4 className="heading4" >Free equity delivery</h4>
                    <p className="pricingPara"> All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹ 0 brokerage. </p>
                </div>
                <div className="col">
                    <img src="/Assets/other-trades.svg" alt="This is pricing 20 svg image" style={{width:"75%"}}/>
                    <h4  className="heading4">Intraday and F&O trades</h4>
                    <p className="pricingPara">Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on intraday trades across <br /> equity, currency, and commodity trades. <br /> Flat ₹20 on all option trades. </p>
                </div>
                <div className="col">
                    <img src="/Assets/pricing0.svg" alt="This is also pricing 0 svg image" style={{width:"75%"}}/>
                    <h4 className="heading4">Free direct MF</h4>
                    <p className="pricingPara">All direct mutual fund investments are <br />absolutely free — ₹ 0 commissions & DP <br /> charges. </p>
                </div>
            </div>
        </div>
     );
}

export default Hero;