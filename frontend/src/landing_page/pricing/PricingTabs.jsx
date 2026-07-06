import React, { useState } from 'react';

const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState('Equity');

  const tabs = ['Equity', 'Currency', 'Commodity'];

  const renderContent = () => {
    if (activeTab === 'Equity') {
      return (
        <div className="table-responsive mt-4 table-bordered">
          <table className="table ">
            <thead className="table-light text-muted">
              <tr>
                <th className="fw-normal border-0 border-end"></th>
                <th className="fw-normal border-0 border-end">Equity delivery</th>
                <th className="fw-normal border-0 border-end">Equity intraday</th>
                <th className="fw-normal border-0 border-end">F&O - Futures</th>
                <th className="fw-normal border-0">F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted">Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td className="text-muted">STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.05% on the sell side</td>
                <td>
                  <ul className="mb-0 ps-3">
                    <li>0.15% of the intrinsic value on options that are bought and exercised</li>
                    <li>0.15% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="text-muted">Transaction charges</td>
                <td>NSE: 0.00307% <br />
                  BSE: 0.00375%</td>
                <td>NSE: 0.00307% <br />
                  BSE: 0.00375%</td>
                <td>NSE: 0.00183% <br />
                  BSE: 0</td>
                <td>NSE: 0.03553% (on premium) <br />
                  BSE: 0.0325% (on premium)</td>
              </tr>
              <tr>
                <td className='text-muted'>GST</td>
                <td>18% on (brokerage + SEBI <br />charges + transaction <br /> charges)</td>
                <td>18% on (brokerage + SEBI <br />charges + transaction <br /> charges)</td>
                <td>18% on (brokerage + SEBI <br />charges + transaction <br /> charges)</td>
                <td>18% on (brokerage + SEBI charges <br />+ transaction charges)</td>
              </tr>
              <tr>
                <td className='text-muted'>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td className='text-muted'>Stamp charges</td>
                <td>0.015% or ₹1500 / crore on <br />buy side</td>
                <td>0.003% or ₹300 / crore on <br />buy side</td>
                <td>0.002% or ₹200 / crore on <br /> buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>

            </tbody>
          </table>
        </div>
      );
    }


    if (activeTab === 'Currency') {
      return (
        <div className="table-responsive mt-4 table-bordered">
          <table className="table ">
            <thead className="table-light text-muted">
              <tr>
                <th className="fw-normal border-0 border-end"></th>
                <th className="fw-normal border-0 border-end">Currency futures</th>
                <th className="fw-normal border-0">Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted">Brokerage</td>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td className="text-muted">STT/CTT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
              <tr>
                <td className="text-muted">Transaction charges</td>
                <td>
                  NSE: 0.00035%<br />
                  BSE: 0.00045%
                </td>
                <td>
                  NSE: 0.0311%<br />
                  BSE: 0.001%
                </td>
              </tr>
              <tr>
                <td className="text-muted">GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="text-muted">SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td className="text-muted">Stamp charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    if (activeTab === 'Commodity') {
      return (
        <div className="table-responsive table-bordered mt-4">
          <table className="table ">
            <thead className="table-light text-muted">
              <tr>
                <th className="fw-normal border-0 border-end"></th>
                <th className="fw-normal border-0 border-end">Commodity futures</th>
                <th className="fw-normal border-0">Commodity options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted">Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td className="text-muted">STT/CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td className="text-muted">Transaction charges</td>
                <td>
                  MCX: 0.0021%<br />
                  NSE: 0.0001%
                </td>
                <td>
                  MCX: 0.0418%<br />
                  NSE: 0.001%
                </td>
              </tr>
              <tr>
                <td className="text-muted">GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className="text-muted">SEBI charges</td>
                <td>
                  Agri:<br />
                  ₹1 / crore<br />
                  Non-agri:<br />
                  ₹10 / crore
                </td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td className="text-muted">Stamp charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  };


  const chargesContent=()=>{
    return(

      <div className="table-responsive table-bordered">
        <table className='table'>
          <thead > 
            <tr>
              <th className="fw-normal ">Type of account</th>
              <th className="fw-normal ">Charges</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td className='text-muted'>Individual account</td>
              <td>
                <span className='free-tag'>free</span>
              </td>
            </tr>
            <tr>
              <td className='text-muted'>Minor account</td>
              <td>
                <span className='free-tag'>free</span>
              </td>
            </tr>
            <tr >
              <td className='text-muted'>NRI account</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td className='text-muted' >HUF account</td>
              <td>
                <span className='free-tag'>free</span>(online) / ₹ 500 (offline)
              </td>
            </tr>
            <tr>
              <td className='text-muted'>Partnership, LLP, and Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs border-bottom-1 fs-5">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link border-0 ${activeTab === tab
                ? 'active text-primary fw-medium'
                : 'text-muted bg-transparent'
                }`}
              onClick={() => setActiveTab(tab)}
              style={{
                borderBottom: activeTab === tab ? '2px solid transparent' : '2px solid #0d6efd ',
                borderRadius: '0',fontSize:"1.6rem",backgroundColor: 'transparent'
              }}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {renderContent()}
      <div className="row mt-5 mb-5 text-center">
        <h4 style={{fontSize:"1.25rem",color:"#424242"}}> <a href="" style={{textDecoration:"none",cursor:"pointer"}}>Calculate your costs upfront </a> using our brokerage calculator</h4>
      </div>
      {chargesContent()}
    </div>
    
  );
};

export default PricingTabs;