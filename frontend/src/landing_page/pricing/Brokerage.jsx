function Brokerage() {
    return (
        <div className="container">
            <h4 style={{ marginBottom: "1rem" }}>Charges explained</h4>
            <div className="row">
                <div className="col">
                    <h4 className="bh4">Securities/Commodities transaction tax</h4>

                    <p className="bp">Tax by the government when transacting on the exchanges. Charged as above on both buy <br />and sell sides when trading equity delivery. Charged only on selling side when trading <br />intraday or on F&O.</p>

                    <p className="bp"> When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. <br />Important to keep a tab.</p>

                    <h4 className="bh4"> Transaction/Turnover Charges</h4>

                    <p className="bp"> Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

                    <p className="bp">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore <br /> w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

                    <p className="bp"> BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross <br />turnover.</p>

                    <p className="bp"> BSE has revised transaction charges for group A, B and other non exclusive scrips (non- <br /> exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate <br /> basis w.e.f. December 1, 2022.</p>

                    <p className="bp">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross <br />turnover.</p>

                    <h4 className="bh4">Call & trade</h4>

                    <p className="bp">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including <br />auto square off orders.</p>

                    <h4 className="bh4">Stamp charges</h4>

                    <p className="bp">
                        Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for <br /> transacting in instruments on the stock exchanges and depositories.</p>

                    <h4 className="bh4">NRI brokerage charges</h4>
                    <ul>
                        <li className="bp">For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is <br /> lower).</li>

                        <li className="bp"> For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li className="bp">
                            ₹500 + GST as yearly account maintenance charges (AMC) charges.
                        </li>
                    </ul>

                    <h4 className="bh4">Account with debit balance</h4>

                    <p className="bp">
                        If the account is in debit balance, any order placed will be charged ₹40 per executed order <br />instead of ₹20 per executed order.</p>

                    <h4 className="bh4"> Charges for Investor's Protection Fund Trust (IPFT) by NSE</h4>

                    <ul>
                        <li className="bp">Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                        <li className="bp">Options - ₹0.01 per crore + GST traded value (premium value).</li>
                        <li className="bp">Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of <br />premium for Options.</li>
                    </ul>

                    <h4 className="bh4">Margin Trading Facility (MTF)</h4>
                    <ul>

                        <li className="bp">MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                        <li className="bp">MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                        <li className="bp">MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                    </ul>

                </div>
                <div className="col">

                    <h4 className="bh4">GST</h4>

                   <p className="bp"> Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges <br />+ transaction charges)</p>

                    <h4 className="bh4">SEBI Charges</h4>

                    <p className="bp">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the <br />markets.</p>

                    <h4 className="bh4">DP (Depository participant) charges</h4>

                    <p className="bp">₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading <br />account ledger when stocks are sold, irrespective of quantity.</p>

                    <p className="bp" >Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction <br /> on the CDSL fee.</p>

                    <p className="bp">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL <br />fee.</p>

                    <h4 className="bh4">Pledging charges</h4>

                   <p className="bp"> ₹30 + GST per pledge request per ISIN.</p>

                    <h4 className="bh4">AMC (Account maintenance charges)</h4>

                   <p className="bp">Free for the first year on all new resident individual accounts.</p> 

                    <p className="bp">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. </p>

                    <p className="bp">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). </p>
                    <h4 className="bh4">Corporate action order charges</h4>

                    <p className="bp">₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

                    <h4 className="bh4">Off-market transfer charges</h4>

                   <p className="bp"> ₹25 per transaction.</p>

                    <h4 className="bh4">Physical CMR request</h4>

                   <p className="bp"> First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

                   <h4 className="bh4"> Payment gateway charges</h4>

                    <p className="bp">₹9 + GST (Not levied on transfers done via UPI)</p>

                    <h4 className="bh4">Delayed Payment Charges</h4>

                    <p className="bp">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.</p>

                    <p className="bh4">Trading using 3-in-1 account with block functionality</p>
                    <ul>
                    <li className="bp"> <b>Delivery & MTF Brokerage: </b>0.5% per executed order.</li>
                    <li className="bp"> <b>Intraday Brokerage: </b>0.05% per executed order.</li>
                    </ul>

                </div>
            </div>
            <div className="row mt-3 mb-5">
                <h4 className="bh4" >Disclaimer</h4>
                <p className="bp"> For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. <br />Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and <br />assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery <br />brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% <br />will be charged. </p>
            </div>
        </div>
    );
}

export default Brokerage;