function RightSection(props) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4 className="mt-5 mb-5" >{props.headingText}</h4>
                    <p style={{ whiteSpace: 'pre-line' }} className="mt-3" >{props.paraText}</p>
                </div>
                <div className="col mb-5" style={{maxWidth:"80%",marginLeft:"8.9rem" }}><img src={props.imgUrl} /></div>
                
            </div>
            
        </div>
    );
}

export default RightSection;