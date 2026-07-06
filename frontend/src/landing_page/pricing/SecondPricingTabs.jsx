function SecondPricingTabs() {

    const dematAmc = () => {
        return (
            < >
                <div className="row">
                    <h3 style={{ fontSize: "1.5rem", color: "#424242", fontWeight: "500" }}>Demat AMC (Annual Maintenance Charge)</h3>
                    <p className="free-amc-banner">
                        Free for first year* </p>
                    <p style={{fontSize:".75rem"}}>From second year onwards, for BSDA accounts:</p>
                </div>
                <div className="row ">
                    <div className="table-responsive table-bordered">
                    <table className="table ">
                        <thead>
                            <th>Value of holdings</th>
                            <th>AMC</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Up to ₹4 lakh</td>
                                <td><span className='free-tag'>free</span></td>
                            </tr>
                            <tr>
                                <td>₹4 lakh – ₹10 lakh</td>
                                <td>₹100 per year + 18% GST, charged quarterly</td>
                            </tr>
                            <tr>
                                <td>Above ₹10 lakh</td>
                                <td>₹300 per year + 18% GST, charged quarterly</td>
                            </tr>
                        </tbody>

                    </table>
                    </div>
                </div>

                <div className="row " style={{marginBottom:"4.5rem"}}>
                    <p style={{fontSize:".75rem"}}> For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly. </p>
                    <p style={{fontSize:".75rem"}} > *Resident individual accounts only. </p>
                </div>
            </>
        )
    }

    const charges = ()=>{
        return(
            <>
            <div className="row">
                <h4 style={{ fontSize: "1.5rem", color: "#424242", fontWeight: "500" }}>Charges for optional value added services</h4>
            </div>
            <div className="row">
            <div className="table-responsive table-bordered mt-4 mb-5">
                <table className="table ">
                    <thead>
                        <th>Service</th>
                        <th>Billing Frequency</th>
                        <th>Charges</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tickertape</td>
                            <td>Monthly / Quarterly / Annual</td>
                            <td>Free: 0 | Pro: 249/699/2399</td>
                        </tr>
                        <tr>
                            <td>Smallcase</td>
                            <td>Per transaction</td>
                            <td>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td>Kite Connect</td>
                            <td>Monthly</td>
                            <td>Connect: 500 | Personal: Free</td>
                        </tr>
                    </tbody>
                </table>
                </div>  
            </div>          
            </>
        )
    }
    return (
        <div className="mt-5 container">
            {dematAmc()}
            {charges()}

        </div>
    );
}

export default SecondPricingTabs;