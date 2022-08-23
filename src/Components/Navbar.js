import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    let location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/joinroom" ? "active" : ""}`} to="/joinroom">Join Room</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/compiler" ? "active" : ""}`} to="/compiler">Compiler</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/saved" ? "active" : ""}`} to="/saved">Saved</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <Link className="btn btn-warning mx-2" to="login">Login</Link>
                        <Link className="btn btn-warning mx-2" to='signup'>SignUp</Link>
                    </form>
                </div>
            </div>
        </nav>

    );
}



export default Navbar