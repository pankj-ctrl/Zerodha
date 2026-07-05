import { Link } from "react-router-dom";
function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h4>The Zerodha Universe</h4>
                <p className="mt-2"> Extend your trading and investment experience even further with our partner platforms </p>
            </div>
            <div className="row text-center" style={{ marginTop: "2rem", padding: "2rem" }}>
                <div className="col">
                    <img src="/public/Assets/zerodhafundhouse.png" alt="This is a zerodha fund house" style={{ width: "50%" }} />
                    <p style={{ lineHeight: "18px", display: "block", marginTop: "22px", fontSize: "0.75rem", color: "#9b9b9b" }}>Our asset management venture <br />
                        that is creating simple and transparent index <br />
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col">
                    <img src="/public/Assets/sensibullLogo.svg" alt="This is a sensibull logo" style={{ width: "70%" }} />
                    <p style={{ lineHeight: "18px", display: "block", marginTop: "22px", fontSize: "0.75rem", color: "#9b9b9b" }}>Options trading platform that lets you <b></b>
                        create strategies, analyze positions, and examine <b></b>
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col">
                    <img src="/public/Assets/tijori.svg" alt="This is a tijori logo" style={{ width: "47%" }} />
                    <p style={{ lineHeight: "18px", display: "block", marginTop: "2px", fontSize: "0.75rem", color: "#9b9b9b" }}>Investment research platform <br />
                        that offers detailed insights on stocks,<br />
                        sectors, supply chains, and more.
                    </p>
                </div>
            </div>
            <div className="row text-center" style={{ marginTop: "2rem", padding: "2rem" }}>
                <div className="col">
                    <img src="/public/Assets/streakLogo.png" alt="This is streak logo" style={{ width: "50%" }} />
                    <p style={{ lineHeight: "18px", display: "block", marginTop: "22px", fontSize: "0.75rem", color: "#9b9b9b" }}>Systematic trading platform <br />
                        that allows you to create and backtest <br />
                        straegies without coding.
                    </p>
                </div>
                <div className="col">
                    <img src="/public/Assets/smallcaseLogo.png" alt="This is a smallcase logo" style={{ width: "70%" }} />
                    <p style={{ lineHeight: "18px", display: "block", marginTop: "16px", fontSize: "0.75rem", color: "#9b9b9b" }}>
                        Thematic investing platform <br />
                        that helps you invest in diversified <br />
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col">
                    <img src="/public/Assets/dittoLogo.png" alt="This is a tijori logo" style={{ width: "47%" }} />
                    <p style={{ lineHeight: "18px", display: "block", marginTop: "16px", fontSize: "0.75rem", color: "#9b9b9b" }}>Personalized advice on life <br />
                        and health insurance. No spam <br />
                        and no mis-selling.

                    </p>
                </div>
            </div>
            <div className="row text-center">
                <Link to='/signup'> <button className='btn btn-primary p-2 fs-5 mt-4 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign Up for free</button> </Link>
            </div>
        </div>
    );
}

export default Universe;