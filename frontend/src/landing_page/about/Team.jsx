function Team() {
    return (
        <div className="container p-5">
            <div className="row text-center">
                <h4 style={{ color: "#424242", fontSize: "1.5rem", lineHeight: "1.5" }}>People</h4>
            </div>
            <div className="row ">
                <div className="col image-cropper p-5">
                    <img src="/Assets/pankaj.jpeg" alt="" className="" style={{ borderRadius: "100%", width: "20rem", height: "auto" }} />
                    <h5 className="" style={{ color: "#424242", fontSize: "1.125rem", lineHeight: "1", marginLeft: "6.5rem", marginTop: "2rem", fontWeight: "400" }}>Pankaj Singh</h5>
                    <p className="text-grey" style={{ fontSize: "0.9rem", marginLeft: "7rem" }}>Founder, CEO</p>
                </div>
                <div className="col p-5">
                    <p>
                        Pankaj bootstrapped and developed this Zerodha clone to overcome the <br />
                        hurdles he faced while mastering the MERN stack. Today, his projects <br />
                        are actively leveling up his web development journey.</p>

                    <p>
                        He is a dedicated Computer Science and Engineering student, <br />
                        currently focused on mastering Data Structures and Algorithms in C++.</p>

                    <p>Writing Hindi poetry is his zen.</p>
                </div>
            </div>
        </div>
    );
}

export default Team;