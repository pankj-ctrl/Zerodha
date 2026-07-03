import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container mt-5 p-4">
            <div className="row text-center">
                <h3 className='mt-5 fs-3 fw-bold' style={{color:"#424242"}}>404 Not Found </h3>
                <p style={{color:"#424242"}}className='fs-5'>We couldn’t find the page you were looking for. </p>
                
               <Link to='/'> <button className='btn btn-primary p-2 fs-5 mt-4 mb-5' style={{width:"20%", margin:"0 auto"}}>Zerodha Home</button> </Link>
            </div>
        </div>
      );
}

export default NotFound;