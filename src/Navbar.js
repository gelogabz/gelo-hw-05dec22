import React from 'react'
import { Link } from 'react-router-dom'
import navlogo from './assets/FullnameIcon.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={navlogo} className='img-fluid' alt="navlogo" width="190" height="24" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/Home">Home</Link>
                        <Link className="nav-link active" to="/Login">Login</Link>
                        <Link className="nav-link active" to="/Register">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar