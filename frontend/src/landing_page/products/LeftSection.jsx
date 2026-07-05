function LeftSection(props) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col mb-5" style={{maxWidth:"80%"}}><img src={props.imgUrl} /></div>
                <div className="col">
                    <h4 className="mt-5 mb-5" style={{marginLeft:"8.9rem"}}>{props.headingText}</h4>
                    <p style={{ whiteSpace: 'pre-line' ,marginLeft:"8.9rem"}} className="mt-3" >{props.paraText}</p>
                    <img src="/Assets/googlePlayBadge.svg" alt="This i s google play badge" style={{marginLeft:"9rem",marginTop:"4rem",width:"27%"}} />
                    <img src="/Assets/appstoreBadge.svg" alt="This is a app store badge" style={{marginLeft:"3rem",marginTop:"4rem",width:"27%"}} />
        
                </div>
            </div>
            
        </div>
    );
}

export default LeftSection;